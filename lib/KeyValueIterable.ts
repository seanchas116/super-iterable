import SuperIterable = require("./SuperIterable");
import _ = require("./index");

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
}

for (const method of Object.getOwnPropertyNames(KeyValueIterable.prototype)) {
  if (method != "constructor" && method != "__proto__") {
    SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
  }
}

export = KeyValueIterable;
