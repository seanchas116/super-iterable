import { assert } from "chai";
describe("SuperIterable", () => {
    describe("#map", () => {
        it("maps values", () => {
            const it = _([1, 2, 3]);
            const mapped = it.map(x => x * 2).toArray();
            assert.deepEqual(mapped, [2, 4, 6]);
        });
    });
});
