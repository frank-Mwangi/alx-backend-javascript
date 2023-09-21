const Utils = {
  calculateNumber(type, a, b) {
    if (type == "SUM") {
      return Math.round(Number(a)) + Math.round(Number(b));
    }
    if (type == "SUBTRACT") {
      return Math.round(Number(a)) - Math.round(Number(b));
    }
    if (type == "DIVIDE") {
      if (Math.round(Number(b)) === 0) {
        return "Error";
      }
      return Math.round(Number(a)) / Math.round(Number(b));
    }
  },
};
module.exports = Utils;
