import SuperIterable from "./SuperIterable";
import KeyValueIterable from "./KeyValueIterable";
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
const _ = wrap;
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
