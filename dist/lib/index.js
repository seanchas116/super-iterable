export class SuperIterable {
    constructor(iterable) {
        this[Symbol.iterator] = iterable[Symbol.iterator].bind(iterable);
    }
    map(func) {
        const xs = this;
        return _(function* () {
            for (const x of xs) {
                yield func(x);
            }
        });
    }
    filter(func) {
        const xs = this;
        return _(function* () {
            for (const x of xs) {
                if (func(x)) {
                    yield x;
                }
            }
        });
    }
    flatMap(func) {
        const xs = this;
        return _(function* () {
            for (const x of xs) {
                for (const y of func(x)) {
                    yield y;
                }
            }
        });
    }
    forEach(f) {
        for (const x of this) {
            f(x);
        }
    }
    reduce(f, init) {
        let reduced = init;
        for (const x of this) {
            reduced = f(reduced, x);
        }
        return reduced;
    }
    entries() {
        const xs = this;
        return _(function* () {
            let i = 0;
            for (const x of xs) {
                yield [i, x];
                ++i;
            }
        });
    }
    take(n) {
        const xs = this;
        return _(function* () {
            let i = 0;
            for (const x of xs) {
                if (n <= i) {
                    return;
                }
                yield x;
                ++i;
            }
        });
    }
    takeWhile(f) {
        const xs = this;
        return _(function* () {
            for (const x of xs) {
                if (!f(x)) {
                    return;
                }
                yield x;
            }
        });
    }
    drop(n) {
        const xs = this;
        return _(function* () {
            let i = 0;
            for (const x of xs) {
                if (n <= i) {
                    yield x;
                }
                ++i;
            }
        });
    }
    dropWhile(f) {
        const xs = this;
        return _(function* () {
            let dropping = true;
            for (const x of xs) {
                if (dropping) {
                    dropping = f(x);
                    if (dropping) {
                        continue;
                    }
                }
                yield x;
            }
        });
    }
    every(p) {
        for (const x of this) {
            if (!p(x)) {
                return false;
            }
        }
        return true;
    }
    some(p) {
        for (const x of this) {
            if (p(x)) {
                return true;
            }
        }
        return false;
    }
    find(p) {
        for (const x of this) {
            if (p(x)) {
                return x;
            }
        }
        return undefined;
    }
    findIndex(p) {
        let i = 0;
        for (const x of this) {
            if (p(x)) {
                return i;
            }
            ++i;
        }
        return -1;
    }
    indexOf(elem) {
        let i = 0;
        for (const x of this) {
            if (elem === x) {
                return i;
            }
            ++i;
        }
        return -1;
    }
    includes(elem) {
        for (const x of this) {
            if (elem === x) {
                return true;
            }
        }
        return false;
    }
    concat(...others) {
        const xs = this;
        return _(function* () {
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
    get(n) {
        let i = 0;
        for (const x of this) {
            if (i === n) {
                return x;
            }
            ++i;
        }
        return undefined;
    }
    toArray() {
        return Array.from(this);
    }
}
export class KeyValueIterable extends SuperIterable {
    keys() {
        const xs = this;
        return _(function* () {
            for (const [k, v] of xs) {
                yield k;
            }
        });
    }
    values() {
        const xs = this;
        return _(function* () {
            for (const [k, v] of xs) {
                yield v;
            }
        });
    }
}
for (const method of Object.getOwnPropertyNames(KeyValueIterable.prototype)) {
    if (method != "constructor" && method != "__proto__") {
        SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
    }
}
function wrap(xs) {
    if (xs instanceof Function) {
        return new SuperIterable({
            [Symbol.iterator]: xs
        });
    }
    return new SuperIterable(xs);
}
var _ = wrap;
function times(n) {
    return _(function* () {
        for (let i = 0; i < n; ++i) {
            yield i;
        }
    });
}
function count(begin, step = 1) {
    return _(function* () {
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
