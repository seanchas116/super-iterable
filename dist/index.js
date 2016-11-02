"use strict";
function wrap(xs) {
    if (xs instanceof Function) {
        return new SuperIterable({
            [Symbol.iterator]: xs
        });
    }
    return new SuperIterable(xs);
}
var _ = wrap;
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
module.exports = _;
const SuperIterable = require("./SuperIterable");
require("./KeyValueIterable");
module.exports = _;
