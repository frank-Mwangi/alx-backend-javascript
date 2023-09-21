const assert = require("chai").assert;
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("calculateNumber should correctly sum two integers", () => {
    let result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });
  it("calculateNumber should correctly sum a float and int", () => {
    let result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });
  it("Should correctly sum two floats after rounding them", () => {
    let result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });
  it("Should correctly round two floats befpre summing them", () => {
    let result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
});
