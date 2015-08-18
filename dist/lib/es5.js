"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

var _Object$getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});

var SuperIterable = (function () {
    function SuperIterable(iterable) {
        _classCallCheck(this, SuperIterable);

        this[_Symbol$iterator] = iterable[_Symbol$iterator].bind(iterable);
    }

    _createClass(SuperIterable, [{
        key: "map",
        value: function map(func) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            context$3$0.prev = 3;
                            _iterator = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                context$3$0.next = 12;
                                break;
                            }

                            x = _step.value;
                            context$3$0.next = 9;
                            return func(x);

                        case 9:
                            _iteratorNormalCompletion = true;
                            context$3$0.next = 5;
                            break;

                        case 12:
                            context$3$0.next = 18;
                            break;

                        case 14:
                            context$3$0.prev = 14;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = context$3$0.t0;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator["return"]) {
                                _iterator["return"]();
                            }

                        case 21:
                            context$3$0.prev = 21;

                            if (!_didIteratorError) {
                                context$3$0.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return context$3$0.finish(21);

                        case 25:
                            return context$3$0.finish(18);

                        case 26:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
            }));
        }
    }, {
        key: "filter",
        value: function filter(func) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            context$3$0.prev = 3;
                            _iterator2 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                context$3$0.next = 13;
                                break;
                            }

                            x = _step2.value;

                            if (!func(x)) {
                                context$3$0.next = 10;
                                break;
                            }

                            context$3$0.next = 10;
                            return x;

                        case 10:
                            _iteratorNormalCompletion2 = true;
                            context$3$0.next = 5;
                            break;

                        case 13:
                            context$3$0.next = 19;
                            break;

                        case 15:
                            context$3$0.prev = 15;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError2 = true;
                            _iteratorError2 = context$3$0.t0;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.prev = 20;

                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                                _iterator2["return"]();
                            }

                        case 22:
                            context$3$0.prev = 22;

                            if (!_didIteratorError2) {
                                context$3$0.next = 25;
                                break;
                            }

                            throw _iteratorError2;

                        case 25:
                            return context$3$0.finish(22);

                        case 26:
                            return context$3$0.finish(19);

                        case 27:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
            }));
        }
    }, {
        key: "flatMap",
        value: function flatMap(func) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, x, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, y;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            context$3$0.prev = 3;
                            _iterator3 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                context$3$0.next = 36;
                                break;
                            }

                            x = _step3.value;
                            _iteratorNormalCompletion4 = true;
                            _didIteratorError4 = false;
                            _iteratorError4 = undefined;
                            context$3$0.prev = 10;
                            _iterator4 = _getIterator(func(x));

                        case 12:
                            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                context$3$0.next = 19;
                                break;
                            }

                            y = _step4.value;
                            context$3$0.next = 16;
                            return y;

                        case 16:
                            _iteratorNormalCompletion4 = true;
                            context$3$0.next = 12;
                            break;

                        case 19:
                            context$3$0.next = 25;
                            break;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.t0 = context$3$0["catch"](10);
                            _didIteratorError4 = true;
                            _iteratorError4 = context$3$0.t0;

                        case 25:
                            context$3$0.prev = 25;
                            context$3$0.prev = 26;

                            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                                _iterator4["return"]();
                            }

                        case 28:
                            context$3$0.prev = 28;

                            if (!_didIteratorError4) {
                                context$3$0.next = 31;
                                break;
                            }

                            throw _iteratorError4;

                        case 31:
                            return context$3$0.finish(28);

                        case 32:
                            return context$3$0.finish(25);

                        case 33:
                            _iteratorNormalCompletion3 = true;
                            context$3$0.next = 5;
                            break;

                        case 36:
                            context$3$0.next = 42;
                            break;

                        case 38:
                            context$3$0.prev = 38;
                            context$3$0.t1 = context$3$0["catch"](3);
                            _didIteratorError3 = true;
                            _iteratorError3 = context$3$0.t1;

                        case 42:
                            context$3$0.prev = 42;
                            context$3$0.prev = 43;

                            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                                _iterator3["return"]();
                            }

                        case 45:
                            context$3$0.prev = 45;

                            if (!_didIteratorError3) {
                                context$3$0.next = 48;
                                break;
                            }

                            throw _iteratorError3;

                        case 48:
                            return context$3$0.finish(45);

                        case 49:
                            return context$3$0.finish(42);

                        case 50:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
            }));
        }
    }, {
        key: "forEach",
        value: function forEach(f) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = _getIterator(this), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var x = _step5.value;

                    f(x);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                        _iterator5["return"]();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    }, {
        key: "reduce",
        value: function reduce(f, init) {
            var reduced = init;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = _getIterator(this), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var x = _step6.value;

                    reduced = f(reduced, x);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
                        _iterator6["return"]();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return reduced;
        }
    }, {
        key: "entries",
        value: function entries() {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var i, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;
                            _iteratorNormalCompletion7 = true;
                            _didIteratorError7 = false;
                            _iteratorError7 = undefined;
                            context$3$0.prev = 4;
                            _iterator7 = _getIterator(xs);

                        case 6:
                            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            x = _step7.value;
                            context$3$0.next = 10;
                            return [i, x];

                        case 10:
                            ++i;

                        case 11:
                            _iteratorNormalCompletion7 = true;
                            context$3$0.next = 6;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError7 = true;
                            _iteratorError7 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
                                _iterator7["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError7) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError7;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }, {
        key: "take",
        value: function take(n) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var i, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;
                            _iteratorNormalCompletion8 = true;
                            _didIteratorError8 = false;
                            _iteratorError8 = undefined;
                            context$3$0.prev = 4;
                            _iterator8 = _getIterator(xs);

                        case 6:
                            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                                context$3$0.next = 16;
                                break;
                            }

                            x = _step8.value;

                            if (!(n <= i)) {
                                context$3$0.next = 10;
                                break;
                            }

                            return context$3$0.abrupt("return");

                        case 10:
                            context$3$0.next = 12;
                            return x;

                        case 12:
                            ++i;

                        case 13:
                            _iteratorNormalCompletion8 = true;
                            context$3$0.next = 6;
                            break;

                        case 16:
                            context$3$0.next = 22;
                            break;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError8 = true;
                            _iteratorError8 = context$3$0.t0;

                        case 22:
                            context$3$0.prev = 22;
                            context$3$0.prev = 23;

                            if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
                                _iterator8["return"]();
                            }

                        case 25:
                            context$3$0.prev = 25;

                            if (!_didIteratorError8) {
                                context$3$0.next = 28;
                                break;
                            }

                            throw _iteratorError8;

                        case 28:
                            return context$3$0.finish(25);

                        case 29:
                            return context$3$0.finish(22);

                        case 30:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 18, 22, 30], [23,, 25, 29]]);
            }));
        }
    }, {
        key: "takeWhile",
        value: function takeWhile(f) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion9 = true;
                            _didIteratorError9 = false;
                            _iteratorError9 = undefined;
                            context$3$0.prev = 3;
                            _iterator9 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            x = _step9.value;

                            if (f(x)) {
                                context$3$0.next = 9;
                                break;
                            }

                            return context$3$0.abrupt("return");

                        case 9:
                            context$3$0.next = 11;
                            return x;

                        case 11:
                            _iteratorNormalCompletion9 = true;
                            context$3$0.next = 5;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError9 = true;
                            _iteratorError9 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
                                _iterator9["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError9) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError9;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }, {
        key: "drop",
        value: function drop(n) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var i, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;
                            _iteratorNormalCompletion10 = true;
                            _didIteratorError10 = false;
                            _iteratorError10 = undefined;
                            context$3$0.prev = 4;
                            _iterator10 = _getIterator(xs);

                        case 6:
                            if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                                context$3$0.next = 15;
                                break;
                            }

                            x = _step10.value;

                            if (!(n <= i)) {
                                context$3$0.next = 11;
                                break;
                            }

                            context$3$0.next = 11;
                            return x;

                        case 11:
                            ++i;

                        case 12:
                            _iteratorNormalCompletion10 = true;
                            context$3$0.next = 6;
                            break;

                        case 15:
                            context$3$0.next = 21;
                            break;

                        case 17:
                            context$3$0.prev = 17;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError10 = true;
                            _iteratorError10 = context$3$0.t0;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.prev = 22;

                            if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
                                _iterator10["return"]();
                            }

                        case 24:
                            context$3$0.prev = 24;

                            if (!_didIteratorError10) {
                                context$3$0.next = 27;
                                break;
                            }

                            throw _iteratorError10;

                        case 27:
                            return context$3$0.finish(24);

                        case 28:
                            return context$3$0.finish(21);

                        case 29:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
            }));
        }
    }, {
        key: "dropWhile",
        value: function dropWhile(f) {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var dropping, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, x;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            dropping = true;
                            _iteratorNormalCompletion11 = true;
                            _didIteratorError11 = false;
                            _iteratorError11 = undefined;
                            context$3$0.prev = 4;
                            _iterator11 = _getIterator(xs);

                        case 6:
                            if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
                                context$3$0.next = 17;
                                break;
                            }

                            x = _step11.value;

                            if (!dropping) {
                                context$3$0.next = 12;
                                break;
                            }

                            dropping = f(x);

                            if (!dropping) {
                                context$3$0.next = 12;
                                break;
                            }

                            return context$3$0.abrupt("continue", 14);

                        case 12:
                            context$3$0.next = 14;
                            return x;

                        case 14:
                            _iteratorNormalCompletion11 = true;
                            context$3$0.next = 6;
                            break;

                        case 17:
                            context$3$0.next = 23;
                            break;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError11 = true;
                            _iteratorError11 = context$3$0.t0;

                        case 23:
                            context$3$0.prev = 23;
                            context$3$0.prev = 24;

                            if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
                                _iterator11["return"]();
                            }

                        case 26:
                            context$3$0.prev = 26;

                            if (!_didIteratorError11) {
                                context$3$0.next = 29;
                                break;
                            }

                            throw _iteratorError11;

                        case 29:
                            return context$3$0.finish(26);

                        case 30:
                            return context$3$0.finish(23);

                        case 31:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 19, 23, 31], [24,, 26, 30]]);
            }));
        }
    }, {
        key: "every",
        value: function every(p) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = _getIterator(this), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var x = _step12.value;

                    if (!p(x)) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
                        _iterator12["return"]();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            return true;
        }
    }, {
        key: "some",
        value: function some(p) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = _getIterator(this), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var x = _step13.value;

                    if (p(x)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
                        _iterator13["return"]();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            return false;
        }
    }, {
        key: "find",
        value: function find(p) {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = _getIterator(this), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var x = _step14.value;

                    if (p(x)) {
                        return x;
                    }
                }
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
                        _iterator14["return"]();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }

            return undefined;
        }
    }, {
        key: "findIndex",
        value: function findIndex(p) {
            var i = 0;
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
                for (var _iterator15 = _getIterator(this), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    var x = _step15.value;

                    if (p(x)) {
                        return i;
                    }
                    ++i;
                }
            } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
                        _iterator15["return"]();
                    }
                } finally {
                    if (_didIteratorError15) {
                        throw _iteratorError15;
                    }
                }
            }

            return -1;
        }
    }, {
        key: "indexOf",
        value: function indexOf(elem) {
            var i = 0;
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
                for (var _iterator16 = _getIterator(this), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var x = _step16.value;

                    if (elem === x) {
                        return i;
                    }
                    ++i;
                }
            } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
                        _iterator16["return"]();
                    }
                } finally {
                    if (_didIteratorError16) {
                        throw _iteratorError16;
                    }
                }
            }

            return -1;
        }
    }, {
        key: "includes",
        value: function includes(elem) {
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
                for (var _iterator17 = _getIterator(this), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                    var x = _step17.value;

                    if (elem === x) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
                        _iterator17["return"]();
                    }
                } finally {
                    if (_didIteratorError17) {
                        throw _iteratorError17;
                    }
                }
            }

            return false;
        }
    }, {
        key: "concat",
        value: function concat() {
            for (var _len = arguments.length, others = Array(_len), _key = 0; _key < _len; _key++) {
                others[_key] = arguments[_key];
            }

            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, x, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, other, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion18 = true;
                            _didIteratorError18 = false;
                            _iteratorError18 = undefined;
                            context$3$0.prev = 3;
                            _iterator18 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
                                context$3$0.next = 12;
                                break;
                            }

                            x = _step18.value;
                            context$3$0.next = 9;
                            return x;

                        case 9:
                            _iteratorNormalCompletion18 = true;
                            context$3$0.next = 5;
                            break;

                        case 12:
                            context$3$0.next = 18;
                            break;

                        case 14:
                            context$3$0.prev = 14;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError18 = true;
                            _iteratorError18 = context$3$0.t0;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.prev = 19;

                            if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
                                _iterator18["return"]();
                            }

                        case 21:
                            context$3$0.prev = 21;

                            if (!_didIteratorError18) {
                                context$3$0.next = 24;
                                break;
                            }

                            throw _iteratorError18;

                        case 24:
                            return context$3$0.finish(21);

                        case 25:
                            return context$3$0.finish(18);

                        case 26:
                            _iteratorNormalCompletion19 = true;
                            _didIteratorError19 = false;
                            _iteratorError19 = undefined;
                            context$3$0.prev = 29;
                            _iterator19 = _getIterator(others);

                        case 31:
                            if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                                context$3$0.next = 62;
                                break;
                            }

                            other = _step19.value;
                            _iteratorNormalCompletion20 = true;
                            _didIteratorError20 = false;
                            _iteratorError20 = undefined;
                            context$3$0.prev = 36;
                            _iterator20 = _getIterator(other);

                        case 38:
                            if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
                                context$3$0.next = 45;
                                break;
                            }

                            x = _step20.value;
                            context$3$0.next = 42;
                            return x;

                        case 42:
                            _iteratorNormalCompletion20 = true;
                            context$3$0.next = 38;
                            break;

                        case 45:
                            context$3$0.next = 51;
                            break;

                        case 47:
                            context$3$0.prev = 47;
                            context$3$0.t1 = context$3$0["catch"](36);
                            _didIteratorError20 = true;
                            _iteratorError20 = context$3$0.t1;

                        case 51:
                            context$3$0.prev = 51;
                            context$3$0.prev = 52;

                            if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
                                _iterator20["return"]();
                            }

                        case 54:
                            context$3$0.prev = 54;

                            if (!_didIteratorError20) {
                                context$3$0.next = 57;
                                break;
                            }

                            throw _iteratorError20;

                        case 57:
                            return context$3$0.finish(54);

                        case 58:
                            return context$3$0.finish(51);

                        case 59:
                            _iteratorNormalCompletion19 = true;
                            context$3$0.next = 31;
                            break;

                        case 62:
                            context$3$0.next = 68;
                            break;

                        case 64:
                            context$3$0.prev = 64;
                            context$3$0.t2 = context$3$0["catch"](29);
                            _didIteratorError19 = true;
                            _iteratorError19 = context$3$0.t2;

                        case 68:
                            context$3$0.prev = 68;
                            context$3$0.prev = 69;

                            if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
                                _iterator19["return"]();
                            }

                        case 71:
                            context$3$0.prev = 71;

                            if (!_didIteratorError19) {
                                context$3$0.next = 74;
                                break;
                            }

                            throw _iteratorError19;

                        case 74:
                            return context$3$0.finish(71);

                        case 75:
                            return context$3$0.finish(68);

                        case 76:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25], [29, 64, 68, 76], [36, 47, 51, 59], [52,, 54, 58], [69,, 71, 75]]);
            }));
        }
    }, {
        key: "count",
        value: function count() {
            var count = 0;
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                for (var _iterator21 = _getIterator(this), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    var x = _step21.value;

                    ++count;
                }
            } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
                        _iterator21["return"]();
                    }
                } finally {
                    if (_didIteratorError21) {
                        throw _iteratorError21;
                    }
                }
            }

            return count;
        }
    }, {
        key: "get",
        value: function get(n) {
            var i = 0;
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
                for (var _iterator22 = _getIterator(this), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var x = _step22.value;

                    if (i === n) {
                        return x;
                    }
                    ++i;
                }
            } catch (err) {
                _didIteratorError22 = true;
                _iteratorError22 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
                        _iterator22["return"]();
                    }
                } finally {
                    if (_didIteratorError22) {
                        throw _iteratorError22;
                    }
                }
            }

            return undefined;
        }
    }, {
        key: "toArray",
        value: function toArray() {
            return _Array$from(this);
        }
    }]);

    return SuperIterable;
})();

exports.SuperIterable = SuperIterable;

var KeyValueIterable = (function (_SuperIterable) {
    _inherits(KeyValueIterable, _SuperIterable);

    function KeyValueIterable() {
        _classCallCheck(this, KeyValueIterable);

        _get(Object.getPrototypeOf(KeyValueIterable.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(KeyValueIterable, [{
        key: "keys",
        value: function keys() {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, _step23$value, k, v;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion23 = true;
                            _didIteratorError23 = false;
                            _iteratorError23 = undefined;
                            context$3$0.prev = 3;
                            _iterator23 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            _step23$value = _slicedToArray(_step23.value, 2);
                            k = _step23$value[0];
                            v = _step23$value[1];
                            context$3$0.next = 11;
                            return k;

                        case 11:
                            _iteratorNormalCompletion23 = true;
                            context$3$0.next = 5;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError23 = true;
                            _iteratorError23 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
                                _iterator23["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError23) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError23;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }, {
        key: "values",
        value: function values() {
            var xs = this;
            return _(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, _step24$value, k, v;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion24 = true;
                            _didIteratorError24 = false;
                            _iteratorError24 = undefined;
                            context$3$0.prev = 3;
                            _iterator24 = _getIterator(xs);

                        case 5:
                            if (_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            _step24$value = _slicedToArray(_step24.value, 2);
                            k = _step24$value[0];
                            v = _step24$value[1];
                            context$3$0.next = 11;
                            return v;

                        case 11:
                            _iteratorNormalCompletion24 = true;
                            context$3$0.next = 5;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError24 = true;
                            _iteratorError24 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
                                _iterator24["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError24) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError24;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }]);

    return KeyValueIterable;
})(SuperIterable);

exports.KeyValueIterable = KeyValueIterable;
var _iteratorNormalCompletion25 = true;
var _didIteratorError25 = false;
var _iteratorError25 = undefined;

try {
    for (var _iterator25 = _getIterator(_Object$getOwnPropertyNames(KeyValueIterable.prototype)), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
        var method = _step25.value;

        if (method != "constructor" && method != "__proto__") {
            SuperIterable.prototype[method] = KeyValueIterable.prototype[method];
        }
    }
} catch (err) {
    _didIteratorError25 = true;
    _iteratorError25 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
            _iterator25["return"]();
        }
    } finally {
        if (_didIteratorError25) {
            throw _iteratorError25;
        }
    }
}

function wrap(xs) {
    if (xs instanceof Function) {
        return new SuperIterable(_defineProperty({}, _Symbol$iterator, xs));
    }
    return new SuperIterable(xs);
}
var _ = wrap;
function times(n) {
    return _(_regeneratorRuntime.mark(function callee$1$0() {
        var i;
        return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < n)) {
                        context$2$0.next = 7;
                        break;
                    }

                    context$2$0.next = 4;
                    return i;

                case 4:
                    ++i;
                    context$2$0.next = 1;
                    break;

                case 7:
                case "end":
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    }));
}
function count(begin) {
    var step = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    return _(_regeneratorRuntime.mark(function callee$1$0() {
        var i;
        return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    i = begin;

                case 1:
                    if (!true) {
                        context$2$0.next = 7;
                        break;
                    }

                    context$2$0.next = 4;
                    return i;

                case 4:
                    i += step;
                    context$2$0.next = 1;
                    break;

                case 7:
                case "end":
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    }));
}
_.times = times;
_.count = count;
exports["default"] = _;
