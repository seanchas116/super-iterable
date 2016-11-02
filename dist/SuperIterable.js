"use strict";
const _ = require("./index");
class SuperIterable {
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
    winBy(f, p) {
        let reduced = undefined;
        let cached = undefined;
        for (const x of this) {
            const current = f(x);
            if (cached === undefined || p(cached, current)) {
                reduced = x;
                cached = current;
            }
        }
        return reduced;
    }
    maxBy(f) {
        return this.winBy(f, (prev, curr) => curr > prev);
    }
    minBy(f) {
        return this.winBy(f, (prev, curr) => curr < prev);
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
    toSet() {
        return new Set(this);
    }
    toMap(k) {
        return new Map(this.map(x => [k(x), x]));
    }
}
module.exports = SuperIterable;
