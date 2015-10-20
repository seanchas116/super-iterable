declare var module;
declare function require(path: string);

function wrap<T>(xs: any) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(xs);
}

var _ = <Static>wrap;

function times(n: number) {
  return _(function *() {
    for (let i = 0; i < n; ++i) {
      yield i;
    }
  });
}

function count(begin: number, step = 1) {
  return _(function *() {
    let i = begin;
    while (true) {
      yield i;
      i += step;
    }
  });
}

_.times = times;
_.count = count;

// pre-export _
module.exports = _;

export =  _;

import SuperIterable = require("./SuperIterable");
import Static = require("./Static");
require("./KeyValueIterable");
