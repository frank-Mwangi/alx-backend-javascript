const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it("Tests if calculateNumber yields 120 with inputs 100, 20", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.equal(
      true
    );
    expect(consoleSpy.calledOnce).to.equal(true);
  });
  it("Tests if calculateNumber yields 20 with inputs 10, 10", () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.equal(true);
    expect(consoleSpy.calledOnce).to.equal(true);
  });
});
