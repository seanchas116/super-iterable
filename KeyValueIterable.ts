import SuperIterable from "./SuperIterable";
import _ from "./index";

export default
class KeyValueIterable<K, V> extends SuperIterable<[K, V]> {
  keys() {
    const xs = this;
    return _(function *() {
      for (const [k, v] of xs) {
        yield k;
      }
    });
  }
}
