const createCalculator = require("./addSubract");
const { expect } = require("chai");

describe("createCalculator()", function () {
  it("should return a module object with add, subract and get as properties", function () {
    const calculator = createCalculator();
    expect(calculator).to.haveOwnProperty("add");
    expect(calculator).to.haveOwnProperty("subtract");
    expect(calculator).to.haveOwnProperty("get");
  });

  it("should return the value of the interanl sum with get()", function () {
    const calculator = createCalculator();
    let value = calculator.get();
    expect(value).to.equal(0);
  });

  it("should add number to value with sum with number input", function () {
    const calculator = createCalculator();
    calculator.add(5);
    let value = calculator.get();
    expect(value).to.equal(5);
  });

  it("should add number to value with sum with string input", function () {
    const calculator = createCalculator();
    calculator.add("5");
    value = calculator.get();
    expect(value).to.equal(5);
  });

  it("should subtract the number from value with subtract with number input", function () {
    const calculator = createCalculator();
    calculator.add(5);
    calculator.subtract(1);
    let value = calculator.get();
    expect(value).to.equal(4);
  });

  it("should subtract the number from value with subtract with string input", function () {
    const calculator = createCalculator();
    calculator.add(5);
    calculator.subtract("3");
    let value = calculator.get();
    expect(value).to.equal(2);
  });
});
