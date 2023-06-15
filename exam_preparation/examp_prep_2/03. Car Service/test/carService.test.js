const { expect } = require("chai");
const carService = require("../03. Car Service");

describe("carService", function () {
  describe("isItExpensive()", function () {
    it("should return correct value if the issue is with the Engine or Transmission", function () {
      let engineIssue = "Engine";
      let transmissionIssue = "Transmission";

      let result1 = carService.isItExpensive(engineIssue);
      let result2 = carService.isItExpensive(transmissionIssue);
      expect(result1).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
      expect(result2).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("should return the correct value if the issue is not with the Engine or Transmission", function () {
      let issue1 = "Brakes";
      let issue2 = "Wheel";

      let result1 = carService.isItExpensive(issue1);
      let result2 = carService.isItExpensive(issue2);

      expect(result1).to.equal("The overall price will be a bit cheaper");
      expect(result2).to.equal("The overall price will be a bit cheaper");
    });
  });

  describe("discount()", function () {
    it("should throw and Error if the inputs are incorrect", function () {
      let wrongInput1 = "12";
      let wrongInput2 = "25";
      let wrongInput3 = { number: 3 };
      let wrongInput4 = { number: 4 };
      let rightInput1 = 23;
      let rightInput2 = 35;

      let result1 = () => carService.discount(wrongInput1, wrongInput2);
      let result2 = () => carService.discount(wrongInput3, wrongInput4);
      let result3 = () => carService.discount(rightInput1, wrongInput1);
      let result4 = () => carService.discount(wrongInput1, rightInput2);

      expect(result1).to.throw(Error, "Invalid input");
      expect(result2).to.throw(Error, "Invalid input");
      expect(result3).to.throw(Error, "Invalid input");
      expect(result4).to.throw(Error, "Invalid input");
    });

    it("should return the correct price dependent on number of parts", function () {
      let parts1 = 1;
      let parts2 = 2;
      let parts7 = 7;
      let parts8 = 8;
      let parts9 = 9.0;
      let parts10 = 10.0;

      let totalPrice1 = 100;
      let totalPrice2 = 200.0;
      let totalPrice3 = 50;

      let result1 = carService.discount(parts1, totalPrice1);
      let result2 = carService.discount(parts2, totalPrice1);
      let result3 = carService.discount(parts7, totalPrice1);
      let result4 = carService.discount(parts8, totalPrice1);
      let result5 = carService.discount(parts9, totalPrice2);
      let result6 = carService.discount(parts10, totalPrice3);

      expect(result1).to.equal("You cannot apply a discount");
      expect(result2).to.equal("You cannot apply a discount");
      expect(result3).to.equal(
        `Discount applied! You saved ${totalPrice1 * 0.15}$`
      );
      expect(result4).to.equal(
        `Discount applied! You saved ${totalPrice1 * 0.3}$`
      );
      expect(result5).to.equal(
        `Discount applied! You saved ${totalPrice2 * 0.3}$`
      );
      expect(result6).to.equal(
        `Discount applied! You saved ${totalPrice3 * 0.3}$`
      );
    });
  });

  describe("partsToBuy", function () {
    it("should throw an error if inputs are invalid", function () {
      let wrongInput1 = 123;
      let wrongInput2 = "[1, 2, 3]";
      let wrongInput3 = { number: 123 };
      let neededParts = [{ brakes: 100, price: 200 }];
      let partsToBuy = [{ wheel: 250, price: 150 }];

      let result1 = () => carService.partsToBuy(wrongInput1, neededParts);
      let result2 = () => carService.partsToBuy(wrongInput2, neededParts);
      let result3 = () => carService.partsToBuy(wrongInput3, neededParts);
      let result4 = () => carService.partsToBuy(partsToBuy, wrongInput1);
      let result5 = () => carService.partsToBuy(partsToBuy, wrongInput2);
      let result6 = () => carService.partsToBuy(partsToBuy, wrongInput3);

      expect(result1).to.throw(Error, "Invalid input");
      expect(result2).to.throw(Error, "Invalid input");
      expect(result3).to.throw(Error, "Invalid input");
      expect(result4).to.throw(Error, "Invalid input");
      expect(result5).to.throw(Error, "Invalid input");
      expect(result6).to.throw(Error, "Invalid input");
    });

    it("should return 0 if parts catalog is empty", function () {
      let emptyPartsToBuy = [];
      let emptyNeededParts = [];
      let neededParts = [{ brakes: 100, price: 200 }];
      let partsToBuy = [{ wheel: 250, price: 150 }];

      let result1 = carService.partsToBuy(partsToBuy, emptyNeededParts);
      let result2 = carService.partsToBuy(emptyPartsToBuy, neededParts);

      expect(result1).to.equal(0);
      expect(result2).to.equal(0);
    });

    it("should return the correct total price", function () {
      let arrParts = [
        { part: "blowoff valve", price: 145 },
        { part: "coil springs", price: 230 },
      ];
      let neededParts1 = ["blowoff valve", "injectors"];
      let neededParts2 = ["blowoff valve", "coil springs"];

      let result1 = carService.partsToBuy(arrParts, neededParts1);
      let result2 = carService.partsToBuy(arrParts, neededParts2);

      expect(result1).to.equal(145);
      expect(result2).to.equal(375);
    });
  });
});
