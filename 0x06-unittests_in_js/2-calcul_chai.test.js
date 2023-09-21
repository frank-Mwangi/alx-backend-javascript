const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

const SUM = "SUM";
const SUBTRACT = "SUBTRACT";
const DIVIDE = "DIVIDE";

describe("calculateNumber", () => {
  describe("type SUM", () => {
    it("Should sum given integers", () => {
      expect(calculateNumber(SUM, 1, 4)).to.equal(5);
      expect(calculateNumber(SUM, 3, -2)).to.equal(1);
      expect(calculateNumber(SUM, -4, -8)).to.equal(-12);
    });
    it("Should sum rounded up floats", () => {
      expect(calculateNumber(SUM, 0.4, 2.87)).to.equal(3);
      expect(calculateNumber(SUM, -1.8, 3.08)).to.equal(1);
      expect(calculateNumber(SUM, -4.5, -4.5)).to.equal(-8);
      expect(calculateNumber(SUM, 1.4, 5)).to.equal(6);
      expect(calculateNumber(SUM, 1, 4.5)).to.equal(6);
      expect(calculateNumber(SUM, 1.4, 4.4)).to.equal(5);
      expect(calculateNumber(SUM, 8, -8.1)).to.equal(0);
      expect(calculateNumber(SUM, 7.8, -9)).to.equal(-1);
      expect(calculateNumber(SUM, 7.8, -9.2)).to.equal(-1);
      expect(calculateNumber(SUM, 3, -5.1)).to.equal(-2);
      expect(calculateNumber(SUM, 3.1, -6)).to.equal(-3);
      expect(calculateNumber(SUM, 3.1, -5.2)).to.equal(-2);
    });
  });
  describe("type SUBTRACT", () => {
    it("Should return the difference between two integers", () => {
      expect(calculateNumber(SUBTRACT, 6, 2)).to.equal(4);
      expect(calculateNumber(SUBTRACT, 15, 5)).to.equal(10);
      expect(calculateNumber(SUBTRACT, 1, 5)).to.equal(-4);
    });
    it("Should return the difference of rounded floats", () => {
      expect(calculateNumber(SUBTRACT, 8.7, 4)).to.equal(5);
      expect(calculateNumber(SUBTRACT, 9, 4.31)).to.equal(5);
      expect(calculateNumber(SUBTRACT, 10.12, 9.88)).to.equal(0);
      expect(calculateNumber(SUBTRACT, 10.25, 10.1)).to.equal(0);
      expect(calculateNumber(SUBTRACT, 10, 9.82)).to.equal(0);
      expect(calculateNumber(SUBTRACT, 8.1, 9.4)).to.equal(-1);
      expect(calculateNumber(SUBTRACT, 7.2, 9)).to.equal(-2);
      expect(calculateNumber(SUBTRACT, 8.8, 4.12)).to.equal(5);
      expect(calculateNumber(SUBTRACT, 8, 9.2)).to.equal(-1);
    });
  });
  describe("type DIVIDE", () => {
    it("Should return the quotient of integers", () => {
      expect(calculateNumber(DIVIDE, 9, 4)).to.equal(2.25);
      expect(calculateNumber(DIVIDE, -9, 4)).to.equal(-2.25);
      expect(calculateNumber(DIVIDE, 9, -4)).to.equal(-2.25);
      expect(calculateNumber(DIVIDE, -9, -4)).to.equal(2.25);
    });
    it("Should retrn the quotient of rounded floats", () => {
      expect(calculateNumber(DIVIDE, 1.6, 5.2)).to.equal(0.4);
      expect(calculateNumber(DIVIDE, 1.6, 5)).to.equal(0.4);
      expect(calculateNumber(DIVIDE, 2, 5.2)).to.equal(0.4);
      expect(calculateNumber(DIVIDE, -1.6, 5.2)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, -1.6, 5)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, -2, 5.2)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, 1.6, -5.2)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, 1.6, -5)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, 2, -5.2)).to.equal(-0.4);
      expect(calculateNumber(DIVIDE, -1.6, -5.2)).to.equal(0.4);
      expect(calculateNumber(DIVIDE, -1.6, -5)).to.equal(0.4);
      expect(calculateNumber(DIVIDE, -2, -5.2)).to.equal(0.4);
    });
    it('should return "ERROR" if divisor rounds to 0', () => {
      expect(calculateNumber(DIVIDE, 8.4, 0.4)).to.equal("Error");
      expect(calculateNumber(DIVIDE, 8.4, 0.2)).to.equal("Error");
      expect(calculateNumber(DIVIDE, 8.4, 0)).to.equal("Error");
    });
  });
});
