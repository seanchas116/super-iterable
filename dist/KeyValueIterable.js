var SuperIterable = require("./SuperIterable");
var _ = require("./index");
class KeyValueIterable extends SuperIterable {
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
module.exports = KeyValueIterable;
