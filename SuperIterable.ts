import _ from "./index";

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

  withIndex() {
    const xs = this;
    return _(function *() {
      let i = 0;
      for (const x of xs) {
        yield [i, x];
        ++i;
      }
    });
  }

  take(n: number) {
    const xs = this;
    return _(function *() {
      let i = 0;
      for (const x of xs) {
        if (n <= i) { return; }
        yield x;
        ++i;
      }
    });
  }

  takeWhile(f: (x: T) => boolean) {
    const xs = this;
    return _(function *() {
      for (const x of xs) {
        if (!f(x)) { return; }
        yield x;
      }
    });
  }

  drop(n: number) {
    const xs = this;
    return _(function *() {
      let i = 0;
      for (const x of xs) {
        if (n <= i) {
          yield x;
        }
        ++i;
      }
    });
  }

  dropWhile(f: (x: T) => boolean) {
    const xs = this;
    return _(function *() {
      let dropping = true;
      for (const x of xs) {
        if (dropping) {
          dropping = f(x);
          if (dropping) { continue; }
        }
        yield x;
      }
    });
  }

  forEach(f: (x: T) => void) {
    for (const x of this) {
      f(x);
    }
  }

  toArray() {
    return Array.from(this);
  }
}
