const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", () => {
  it("Tests if math used is same as that in Utils", () => {
    const spy = sinon.spy(utils, "calculateNumber");
    const request = sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(spy);
    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(utils.calculateNumber("SUM", 100, 20)).to.equal(request);
    spy.restore();
  });
});
