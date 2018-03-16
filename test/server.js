var expect = require("chai").expect;
var request = require("request");

describe("Server", () => {

  describe("Running", () => {

    it("returns status 200", (done) => {
      var url = "http://localhost:3000";
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      })
    });
    
  });

});