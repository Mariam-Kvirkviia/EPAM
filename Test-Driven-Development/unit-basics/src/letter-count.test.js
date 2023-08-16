import { getLetterCount } from "./letter-count";
import { expect } from "chai";
//mocha keywords
//1 string describe the group of tests we run
// 2 function that contains actual test thawe run
describe("getLetterCount - basic functionality", () => {
  // individual test 2argument
  before(function () {
    console.log("runs once before the first test in this block");
  });

  after(function () {
    console.log("runs once after the last test in this block");
  });

  beforeEach(function () {
    console.log("runs before each test in this block");
  });

  afterEach(function () {
    console.log("runs after each test in this block");
  });
  it("return an emprty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });
  it("return the correct letter count for a word with only one of each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });
  it("return the correct letter count for words with more than one of certain letters", () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount("mississippi");
    expect(actual).to.deep.equal(expected);
  });
});
