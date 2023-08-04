const validateValue = require("./validateValue.js");
describe("validate value group of tests", () => {
  test("validate value  of 50", () => {
    expect(validateValue(50)).toEqual(true);
  });
  test("validate value  of -50", () => {
    expect(validateValue(-50)).toEqual(false);
  });
  test("validate value  of 650", () => {
    expect(validateValue(650)).toEqual(false);
  });
  test("validate value  of 0", () => {
    expect(validateValue(0)).toEqual(true);
  });
  test("validate value  of 100", () => {
    expect(validateValue(100)).toEqual(true);
  });
});
