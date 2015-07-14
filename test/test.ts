import {assert} from "chai";
import _ from "../wrap";

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
});
