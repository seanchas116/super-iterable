import SuperIterable from "./SuperIterable";
export default class KeyValueIterable<K, V> extends SuperIterable<[K, V]> {
    keys(): SuperIterable<K>;
    values(): SuperIterable<V>;
    toMap(): Map<K, V>;
}
