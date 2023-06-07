const isSymmetric = require("./isSymmertric");
const { expect } = require("chai");

describe("isSymmetric", function () {
  it("should return false if the input is not an array", function () {
    let arr = "apples";
    let result = isSymmetric(arr);
    expect(result).to.be.false;
    arr = 5;
    result = isSymmetric(arr);
    expect(result).to.be.false;
    arr = {};
    result = isSymmetric(arr);
    expect(result).to.be.false;
  });

  it("should return true if arrays are equal", function () {
    let arr = [];
    let result = isSymmetric(arr);
    expect(result).not.to.be.false;
    expect(result).to.equal(true);

    arr = [1, 2, 3, 4];
    result = isSymmetric(arr);
    expect(result).to.equal(false);

    arr = [1, 2, 2, 1];
    result = isSymmetric(arr);
    expect(result).to.equal(true);
  });

  it("should return true if array has symmetrical objects", function () {
    let arr = [{ a: 1 }, { a: 1 }];
    let result = isSymmetric(arr);
    expect(result).to.equal(true);

    arr = [{ a: 1 }, { a: 2 }];
    result = isSymmetric(arr);
    expect(result).to.equal(false);
  });

  it("should return true if array has symmetrical strings", function () {
    let arr = ["one", "one"];
    let result = isSymmetric(arr);
    expect(result).to.equal(true);
  });

  it("should return false if inputs are not symmetric", function () {
    let arr = [1, 2, 4];
    let result = isSymmetric(arr);
    expect(result).to.be.false;
  });
});
