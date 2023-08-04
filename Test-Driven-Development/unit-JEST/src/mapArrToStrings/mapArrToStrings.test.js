const mapArrToStrings = require("./mapArrToStrings");
describe("turn an array of numbers to the array of strings", () => {
  test("testing [1,2,3]", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("testing []", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test('testing ["1", null, Infinity, NaN, 4]', () => {
    expect(mapArrToStrings(["1", null, Infinity, NaN, 4])).toEqual(["4"]);
  });
});
