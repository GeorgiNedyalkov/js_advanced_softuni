const { expect } = require("chai");
const sum = require("./sum");

describe("sum()", function () {
  it("should sum all the integers in an array", function () {
    // Arrange
    let arr = [1, 2, 3, 4, -4];

    // Act
    let arrSum = sum(arr);

    // Assert
    expect(arrSum).to.equal(6);
  });

  it("should sum all the floating point numbers in an array", function () {
    let arr = [1.1, 2.2, 3.3];
    let arrSum = sum(arr);
    expect(arrSum).to.be.approximately(6.6, 0.0001);
  });

  it("should cast strings to Number before summing", function () {
    let arr = ["10", "33"];
    let arrSum = sum(arr);
    expect(arrSum).to.equal(43);
  });

  it("should return NaN if array elements types are not number", function () {
    let arr = ["first", 33];
    let arrSum = sum(arr);
    expect(arrSum).to.be.NaN;
  });
});
