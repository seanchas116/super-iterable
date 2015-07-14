import {assert} from "chai";
import _ from "../index";

describe("SuperIterable", () => {

  describe("#map", () => {
    it("maps values", () => {
      const it = _([1,2,3]);
      const mapped = it.map(x => x * 2).toArray();
      assert.deepEqual(mapped, [2,4,6]);
    });
  });

  describe("#filter", () => {
    it("filters values", () => {
      const it = _([1,2,3,4]);
      const mapped = it.filter(x => x % 2 === 0).toArray();
      assert.deepEqual(mapped, [2,4]);
    });
  });

  describe("#flatMap", () => {
    it("maps and concat values", () => {
      const it = _([1,2,3]);
      const mapped = it.flatMap(x => [x, x * 2]).toArray();
      assert.deepEqual(mapped, [1,2,2,4,3,6]);
    });
  });

  describe("#entries", () => {
    it("append index to each item", () => {
      const it = _([1,2,3]);
      const result = it.entries().toArray();
      assert.deepEqual(result, [[0,1],[1,2],[2,3]]);
    });
  });

  describe("#take", () => {
    it("takes first n values", () => {
      const it = _([1,2,3]);
      const result = it.take(2);
      assert.deepEqual(result.toArray(), [1,2]);
    });
  });

  describe("#takeWhile", () => {
    it("takes values while predicate is true", () => {
      const it = _([2,4,6,5,4]);
      const result = it.takeWhile(x => x % 2 == 0);
      assert.deepEqual(result.toArray(), [2,4,6]);
    });
  });

  describe("#drop", () => {
    it("drops first n values", () => {
      const it = _([1,2,3]);
      const result = it.drop(2);
      assert.deepEqual(result.toArray(), [3]);
    });
  });

  describe("#dropWhile", () => {
    it("drops values while predicate is true", () => {
      const it = _([2,4,6,5,4]);
      const result = it.dropWhile(x => x % 2 == 0);
      assert.deepEqual(result.toArray(), [5,4]);
    });
  });

  describe("#forEach", () => {
    it("iterates values", () => {
      const iterated = [];
      const it = _([1,2,3]);
      it.forEach(x => iterated.push(x));
      assert.deepEqual(iterated, [1,2,3]);
    });
  });

  describe("#reduce", () => {
    it("reduces values", () => {
      const it = _([1,2,3,4]);
      const result = it.reduce((a, x) => a * x, 1);
      assert.equal(result, 24);
    });
  });

  describe("#count", () => {
    it("counts values", () => {
      const it = _([1,2,3,4]);
      const result = it.count();
      assert.equal(result, 4);
    });
  });

  describe("#concat", () => {
    it("concats iterables", () => {
      const it = _([1,2,3,4]);
      const result = it.concat([5,6,7], new Set([8,9]));
      assert.deepEqual(result.toArray(), [1,2,3,4,5,6,7,8,9]);
    });
  });

  describe("#every", () => {
    it("returns if every elements fulfilled", () => {
      {
        const it = _([2,4,6]);
        const result = it.every(x => x % 2 == 0);
        assert(result);
      }
      {
        const it = _([1,2,3]);
        const result = it.every(x => x % 2 == 0);
        assert(!result);
      }
    });
  });

  describe("#some", () => {
    it("returns if some elements fulfilled", () => {
      {
        const it = _([1,2,3]);
        const result = it.some(x => x % 2 == 0);
        assert(result);
      }
      {
        const it = _([1,3,5]);
        const result = it.some(x => x % 2 == 0);
        assert(!result);
      }
    });
  });

  describe("#find", () => {
    it("finds element with predicate", () => {
      {
        const it = _([1,4,3]);
        const result = it.find(x => x % 2 == 0);
        assert.equal(result, 4);
      }
      {
        const it = _([1,5,3]);
        const result = it.find(x => x % 2 == 0);
        assert.strictEqual(result, undefined);
      }
    });
  });

  describe("#findIndex", () => {
    it("finds index with predicate", () => {
      {
        const it = _([1,4,3]);
        const result = it.findIndex(x => x % 2 == 0);
        assert.equal(result, 1);
      }
      {
        const it = _([1,5,3]);
        const result = it.findIndex(x => x % 2 == 0);
        assert.strictEqual(result, -1);
      }
    });
  });

  describe("#indexOf", () => {
    it("finds index with value", () => {
      {
        const it = _([1,4,3]);
        const result = it.indexOf(4);
        assert.equal(result, 1);
      }
      {
        const it = _([1,5,3]);
        const result = it.indexOf(4);
        assert.strictEqual(result, -1);
      }
    });
  });

  describe("#includes", () => {
    it("return if elem is included", () => {
      {
        const it = _([1,4,3]);
        const result = it.includes(4);
        assert.equal(result, true);
      }
      {
        const it = _([1,5,3]);
        const result = it.includes(4);
        assert.strictEqual(result, false);
      }
    });
  });

  describe("#keys", () => {
    it("return keys", () => {
      const it = _([[1,2],[3,4],[5,6]]);
      const result = it.keys();
      assert.deepEqual(result.toArray(), [1,3,5]);
    });
  });
});

describe("_", () => {
  it("creates SuperIterable from Iterable", () => {
    const it = _([1,2,3]);
    assert.deepEqual(it.toArray(), [1,2,3]);
  });
  it("creates SuperIterabl from generator functions", () => {
    function *gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    const it = _(gen);
    assert.deepEqual(it.toArray(), [1,2,3]);
  });

  describe("times", () => {
    it("creates 0..times Iterable", () => {
      const it = _.times(3);
      assert.deepEqual(it.toArray(), [0,1,2]);
    });
  });
  describe("count", () => {
    it("creates counting Iterable", () => {
      const it = _.count(1, 2).take(3);
      assert.deepEqual(it.toArray(), [1,3,5]);
    });
    it("creates counting Iterable without step", () => {
      const it = _.count(1).take(3);
      assert.deepEqual(it.toArray(), [1,2,3]);
    });
  });
});
