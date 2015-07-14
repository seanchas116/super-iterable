import SuperIterable from "./SuperIterable";
import _ from "./index";
export default class KeyValueIterable extends SuperIterable {
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
    toMap() {
        return new Map(this);
    }
}
