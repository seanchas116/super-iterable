import SuperIterable from "./SuperIterable";
import KeyValueIterable from "./KeyValueIterable";

for (const method of Object.getOwnPropertyNames(KeyValueIterable.prototype)) {
  if (method != "constructor" && method != "__proto__") {
    SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
  }
}

function times(n: number) {
  return wrap(function *() {
    for (let i = 0; i < n; ++i) {
      yield i;
    }
  });
}

function count(begin: number, step = 1) {
  return wrap(function *() {
    let i = begin;
    while (true) {
      yield i;
      i += step;
    }
  });
}

function wrap<T>(xs: any) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(xs);
}

interface SuperIterableStatic {
  <T>(generator: () => Iterator<T>): SuperIterable<T>;
  <K, V>(xs: Iterable<[K, V]>): KeyValueIterable<K, V>;
  <T>(xs: Iterable<T>): SuperIterable<T>;
  times: typeof times;
  count: typeof count;
}

const _ = <SuperIterableStatic>wrap;
_.times = times;
_.count = count;

export default _;
