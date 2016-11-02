import _ = require("./index");

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

  forEach(f: (x: T) => void) {
    for (const x of this) {
      f(x);
    }
  }

  reduce(f: (prev: T, current: T) => T, init: T) {
    let reduced = init;
    for (const x of this) {
      reduced = f(reduced, x);
    }
    return reduced;
  }

  winBy<U>(f: (current: T) => U, p: (prev: U, current: U) => boolean) {
    let reduced: T = undefined;
    let cached: U = undefined;
    for (const x of this) {
      const current = f(x);
      if (cached === undefined || p(cached, current)) {
        reduced = x;
        cached = current;
      }
    }
    return reduced;
  }

  maxBy(f: (x: T) => number) {
    return this.winBy(f, (prev, curr) => curr > prev);
  }

  minBy(f: (x: T) => number) {
    return this.winBy(f, (prev, curr) => curr < prev);
  }

  entries() {
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

  every(p: (x: T) => boolean) {
    for (const x of this) {
      if (!p(x)) { return false; }
    }
    return true;
  }

  some(p: (x: T) => boolean) {
    for (const x of this) {
      if (p(x)) { return true; }
    }
    return false;
  }

  find(p: (x: T) => boolean) {
    for (const x of this) {
      if (p(x)) { return x; }
    }
    return undefined;
  }

  findIndex(p: (x: T) => boolean) {
    let i = 0;
    for (const x of this) {
      if (p(x)) { return i; }
      ++i;
    }
    return -1;
  }

  indexOf(elem: T) {
    let i = 0;
    for (const x of this) {
      if (elem === x) { return i; }
      ++i;
    }
    return -1;
  }

  includes(elem: T) {
    for (const x of this) {
      if (elem === x) { return true; }
    }
    return false;
  }

  concat(...others: Iterable<T>[]) {
    const xs = this;
    return _(function *() {
      for (const x of xs) {
        yield x;
      }
      for (const other of others) {
        for (const x of other) {
          yield x;
        }
      }
    });
  }

  count() {
    let count = 0;
    for (const x of this) {
      ++count;
    }
    return count;
  }

  get(n: number) {
    let i = 0;
    for (const x of this) {
      if (i === n) { return x; }
      ++i;
    }
    return undefined;
  }

  toArray() {
    return Array.from(this);
  }

  toSet() {
    return new Set(this);
  }

  toMap<K>(k: (x: T) => K) {
    return new Map(this.map(x => <[K, T]>[k(x), x]));
  }
}

export = SuperIterable;
