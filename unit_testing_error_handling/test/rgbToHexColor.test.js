const rgbToHexColor = require("./rgbToHexColor");
const chai = require("chai");

describe("rgbToHexColor()", function () {
  it("should return undefined if one of the parameters is not an integer", function () {
    let result;
    result = rgbToHexColor("red", 200, 143);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(100, "green", 143);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(100, 24, "blue");
    chai.expect(result).to.be.undefined;
  });

  it("should return undefined if the parameters are not in range between 0 and 255", function () {
    let result;
    result = rgbToHexColor(256, 100, 100);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(-1, 100, 100);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(100, 256, 100);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(100, -1, 100);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(100, 100, 256);
    chai.expect(result).to.be.undefined;
    result = rgbToHexColor(1, 100, -1);
    chai.expect(result).to.be.undefined;
  });

  it("should return the correct hex value", function () {
    let result;
    result = rgbToHexColor(255, 255, 255);
    chai.expect(result).to.equal("#FFFFFF");

    result = rgbToHexColor(0, 0, 0);
    chai.expect(result).to.equal("#000000");

    result = rgbToHexColor(54, 69, 79);
    chai.expect(result).to.equal("#36454F");

    result = rgbToHexColor(2, 48, 32);
    chai.expect(result).to.equal("#023020");
  });
});
