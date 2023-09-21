const assert = require("assert");
const calculateNumber = require("./1-calcul");

const SUM = "SUM";
const SUBTRACT = "SUBTRACT";
const DIVIDE = "DIVIDE";
const INVALID = "INVALID";

describe("calculateNumber", () => {
  describe("type SUM", () => {
    it("Should sum given integers", () => {
      assert.strictEqual(calculateNumber(SUM, 1, 4), 5);
      assert.strictEqual(calculateNumber(SUM, 3, -2), 1);
      assert.strictEqual(calculateNumber(SUM, -4, -8), -12);
    });
    it("Should sum rounded up floats", () => {
      assert.strictEqual(calculateNumber(SUM, 0.4, 2.88), 3);
      assert.strictEqual(calculateNumber(SUM, -1.8, 4.08), 2);
      assert.strictEqual(calculateNumber(SUM, -4.5, -3.5), -7);
      assert.strictEqual(calculateNumber(SUM, 1.4, 5), 6);
      assert.strictEqual(calculateNumber(SUM, 1, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 8, -8.2), 0);
      assert.strictEqual(calculateNumber(SUM, 7.8, -8), 0);
      assert.strictEqual(calculateNumber(SUM, 7.8, -8.2), 0);
      assert.strictEqual(calculateNumber(SUM, 3, -5.2), -2);
      assert.strictEqual(calculateNumber(SUM, 3.1, -5), -2);
      assert.strictEqual(calculateNumber(SUM, 3.1, -5.2), -2);
    });
  });
  describe("type SUBTRACT", () => {
    it("Should return the difference between two integers", () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 6, 2), 4);
      assert.strictEqual(calculateNumber(SUBTRACT, 15, 5), 10);
      assert.strictEqual(calculateNumber(SUBTRACT, 1, 5), -4);
    });
    it("Should return the difference of rounded floats", () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 8.8, 4.12), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.7, 4), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 9, 4.31), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 10.12, 9.88), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 10.25, 10.1), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 10, 9.82), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.1, 9.4), -1);
      assert.strictEqual(calculateNumber(SUBTRACT, 7.2, 9), -2);
      assert.strictEqual(calculateNumber(SUBTRACT, 8, 9.2), -1);
    });
  });
  describe("type DIVIDE", () => {
    it("Should return the quotient of integers", () => {
      assert.strictEqual(calculateNumber(DIVIDE, 9, 4), 2.25);
      assert.strictEqual(calculateNumber(DIVIDE, -9, 4), -2.25);
      assert.strictEqual(calculateNumber(DIVIDE, 9, -4), -2.25);
      assert.strictEqual(calculateNumber(DIVIDE, -9, -4), 2.25);
    });
    it("Should retrn the quotient of rounded floats", () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 2, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -2, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, -5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, -5), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 2, -5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, -5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, -5), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -2, -5.2), 0.4);
    });
    it('should return "ERROR" if divisor rounds to 0', () => {
      assert.equal(calculateNumber(DIVIDE, 8.4, 0.4), "Error");
      assert.equal(calculateNumber(DIVIDE, 8.4, 0.2), "Error");
      assert.equal(calculateNumber(DIVIDE, 8.4, 0), "Error");
    });
  });
});
