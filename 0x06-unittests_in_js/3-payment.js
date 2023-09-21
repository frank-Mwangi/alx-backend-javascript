const utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  result = utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
};

module.exports = sendPaymentRequestToApi;
