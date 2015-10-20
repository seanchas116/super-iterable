import SuperIterable = require("./SuperIterable");
declare class KeyValueIterable<K, V> extends SuperIterable<[K, V]> {
    keys(): SuperIterable<K>;
    values(): SuperIterable<V>;
}
export = KeyValueIterable;
