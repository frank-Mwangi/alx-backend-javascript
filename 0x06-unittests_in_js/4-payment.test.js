const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", () => {
  it("Tests if math used is same as that in Utils", () => {
    const stub = sinon.stub(utils, "calculateNumber");
    const consoleSpy = sinon.spy(console, "log");
    stub.withArgs("SUM", 100, 20).returns(10);
    const request = sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(stub);
    expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.equal(true);
    expect(utils.calculateNumber("SUM", 100, 20)).to.equal(request);
    expect(consoleSpy.calledWithExactly("The total is: 10")).to.equal(true);
    consoleSpy.restore();
  });
});
