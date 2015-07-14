export default
class SuperIterable<T> implements Iterable<T> {
  [Symbol.iterator]: () => Iterator<T>;

  constructor(iterable: Iterable<T>) {
    this[Symbol.iterator] = iterable[Symbol.iterator].bind(iterable);
  }

  map<U>(func: (x: T) => U) {
    const xs = this;
    return new SuperIterable({
      *[Symbol.iterator]() {
        for (const x of xs) {
          yield func(x);
        }
      }
    });
  }

  toArray() {
    return Array.from(this);
  }
}
