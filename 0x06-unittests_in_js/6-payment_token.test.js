const getPaymentTokenFromApi = require("./6-payment_token");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("getPaymentTokenFromApi", () => {
  it("Should test the successful return of a promise", (done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.eql({ data: "Successful response from the API" });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
