declare class SuperIterable<T> implements Iterable<T> {
    [Symbol.iterator]: () => Iterator<T>;
    constructor(iterable: Iterable<T>);
    map<U>(func: (x: T) => U): SuperIterable<U>;
    filter(func: (x: T) => boolean): SuperIterable<T>;
    flatMap<U>(func: (x: T) => Iterable<U>): SuperIterable<U>;
    forEach(f: (x: T) => void): void;
    reduce(f: (prev: T, current: T) => T, init: T): T;
    entries(): SuperIterable<(number | T)[]>;
    take(n: number): SuperIterable<T>;
    takeWhile(f: (x: T) => boolean): SuperIterable<T>;
    drop(n: number): SuperIterable<T>;
    dropWhile(f: (x: T) => boolean): SuperIterable<T>;
    every(p: (x: T) => boolean): boolean;
    some(p: (x: T) => boolean): boolean;
    find(p: (x: T) => boolean): T;
    findIndex(p: (x: T) => boolean): number;
    indexOf(elem: T): number;
    includes(elem: T): boolean;
    concat(...others: Iterable<T>[]): SuperIterable<T>;
    count(): number;
    get(n: number): T;
    toArray(): T[];
}
export = SuperIterable;
