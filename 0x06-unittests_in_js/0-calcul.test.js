const assert = require("assert");
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
  it("Should correctly round two floats before summing them", () => {
    let result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
  it("Should correctly add two negative integers", () => {
    assert.equal(calculateNumber(-2, -5), -7);
  });
  it("Should correctly sum a negative float and positive integer", () => {
    assert.equal(calculateNumber(-4.47, 12), 8);
  });
  it("Should correctly sum a negative inteer and positive float", () => {
    assert.equal(calculateNumber(-6, 4.55), -1);
  });
  it("Should correctly add two negative floats", () => {
    assert.equal(calculateNumber(-2.1, -5.2), -7);
  });
});
