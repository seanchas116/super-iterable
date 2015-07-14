import _ from "./wrap";

export default
class SuperIterable<T> implements Iterable<T> {
  [Symbol.iterator]: () => Iterator<T>;

  constructor(iterable: Iterable<T>) {
    this[Symbol.iterator] = iterable[Symbol.iterator].bind(iterable);
  }

  map<U>(func: (x: T) => U) {
    const xs = this;
    return _(function *() {
      for (const x of xs) {
        yield func(x);
      }
    });
  }

  filter(func: (x: T) => boolean) {
    const xs = this;
    return _(function *() {
      for (const x of xs) {
        if (func(x)) {
          yield x;
        }
      }
    });
  }

  flatMap<U>(func: (x: T) => Iterable<U>) {
    const xs = this;
    return _(function *() {
      for (const x of xs) {
        for (const y of func(x)) {
          yield y;
        }
      }
    });
  }

  toArray() {
    return Array.from(this);
  }
}
