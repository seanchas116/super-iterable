import SuperIterable from "./SuperIterable";

type ReturnIterator<T> = () => Iterator<T>;

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

function wrap<T>(xs: Iterable<T> | ReturnIterator<T>) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(<Iterable<T>>xs);
}

interface SuperIterableStatic {
  <T>(xs: Iterable<T> | ReturnIterator<T>): SuperIterable<T>;
  times: typeof times;
  count: typeof count;
}

const _ = <SuperIterableStatic>wrap;
_.times = times;
_.count = count;

export default _;
