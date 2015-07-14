import SuperIterable from "./SuperIterable";
import KeyValueIterable from "./KeyValueIterable";
import Static from "./Static";

for (const method of Object.getOwnPropertyNames(KeyValueIterable.prototype)) {
  if (method != "constructor" && method != "__proto__") {
    SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
  }
}

function wrap<T>(xs: any) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(xs);
}

const _ = <Static>wrap;

function times(n: number) {
  return _(function *() {
    for (let i = 0; i < n; ++i) {
      yield i;
    }
  });
}

function count(begin: number, step = 1) {
  return _(function *() {
    let i = begin;
    while (true) {
      yield i;
      i += step;
    }
  });
}

_.times = times;
_.count = count;

export default _;
