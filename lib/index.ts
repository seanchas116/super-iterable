export
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
}

export
class KeyValueIterable<K, V> extends SuperIterable<[K, V]> {
  keys() {
    const xs = this;
    return _(function *() {
      for (const [k, v] of xs) {
        yield k;
      }
    });
  }
  values() {
    const xs = this;
    return _(function *() {
      for (const [k, v] of xs) {
        yield v;
      }
    });
  }
  toMap() {
    return new Map(this);
  }
}

for (const method of Object.getOwnPropertyNames(KeyValueIterable.prototype)) {
  if (method != "constructor" && method != "__proto__") {
    SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
  }
}

export
interface Static {
  <T>(generator: () => Iterator<T>): SuperIterable<T>;
  <K, V>(xs: Iterable<[K, V]>): KeyValueIterable<K, V>;
  <T>(xs: Iterable<T>): SuperIterable<T>;
  times(n: number): SuperIterable<number>;
  count(begin: number, step?: number): SuperIterable<number>;
}

function wrap<T>(xs: any) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(xs);
}

var _ = <Static>wrap;

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
