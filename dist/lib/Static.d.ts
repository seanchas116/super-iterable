import SuperIterable from "./SuperIterable";
import KeyValueIterable from "./KeyValueIterable";
interface SuperIterableStatic {
    <T>(generator: () => Iterator<T>): SuperIterable<T>;
    <K, V>(xs: Iterable<[K, V]>): KeyValueIterable<K, V>;
    <T>(xs: Iterable<T>): SuperIterable<T>;
    times(n: number): SuperIterable<number>;
    count(begin: number, step?: number): SuperIterable<number>;
}
export default SuperIterableStatic;
