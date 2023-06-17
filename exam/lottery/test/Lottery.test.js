const { expect } = require("chai");
const lottery = require("../Lottery");

describe("Loterry", function () {
  describe("BuyLottertTicker()", function () {
    it("should throw an error if inputs are invalid", function () {
      let ticketPrice1 = 10;
      let ticketPrice2 = "10";
      let ticketCount1 = 2;
      let ticketCount2 = "2";
      let buy = true;

      let result1 = () =>
        lottery.buyLotteryTicket(ticketPrice1, ticketCount2, buy);
      let result2 = () =>
        lottery.buyLotteryTicket(ticketPrice2, ticketCount1, buy);

      expect(result1).to.throw(Error, "Invalid input!");
      expect(result2).to.throw(Error, "Invalid input!");
    });

    it("should throw an error if buy is equal to falce", function () {
      let buyFalse = false;
      let ticketPrice = 10;
      let ticketCount = 10;

      let result1 = () =>
        lottery.buyLotteryTicket(ticketPrice, ticketCount, buyFalse);

      expect(result1).to.throw(Error, "Unable to buy lottery ticket!");
    });

    it("should be able to buy ticket and return right message if the requirements are met", function () {
      let ticketPrice = 10;
      let ticketCount = 1;
      let buy = true;

      let totalPrice = ticketPrice * ticketCount;

      let result1 = lottery.buyLotteryTicket(ticketPrice, ticketCount, buy);

      expect(result1).to.equal(
        `You bought ${ticketCount} tickets for ${totalPrice}$.`
      );
    });
  });

  describe("checkTicket()", function () {
    it("should throw error in case of wrong input", function () {
      let ticketNumbers = [];
      let luckyNumbers = [];
      let ticketNumbersNumber = 12;
      let luckyNumbersNumber = 1;
      let ticketNumbersString = "apples";
      let luckyNumbersString = "banana";
      let ticketNumbersObject = { n: 2 };
      let luckyNumbersObject = { b: 4 };

      let result1 = () =>
        lottery.checkTicket(ticketNumbers, luckyNumbersNumber);
      let result2 = () =>
        lottery.checkTicket(ticketNumbers, luckyNumbersString);
      let result3 = () =>
        lottery.checkTicket(ticketNumbers, luckyNumbersObject);
      let result4 = () =>
        lottery.checkTicket(ticketNumbersNumber, luckyNumbers);
      let result5 = () =>
        lottery.checkTicket(ticketNumbersString, luckyNumbers);
      let result6 = () =>
        lottery.checkTicket(ticketNumbersObject, luckyNumbers);

      expect(result1).to.throw(Error, "Invalid input!");
      expect(result2).to.throw(Error, "Invalid input!");
      expect(result3).to.throw(Error, "Invalid input!");
      expect(result4).to.throw(Error, "Invalid input!");
      expect(result5).to.throw(Error, "Invalid input!");
      expect(result6).to.throw(Error, "Invalid input!");
    });

    it("should have valid ticket with 6 numbers", function () {
      let ticketNumbersFive = [1, 2, 3, 4, 5];
      let luckyNumbersFive = [1, 2, 3, 4, 5];
      let ticketNumbersSeven = [1, 2, 3, 4, 5, 6, 7];
      let luckyNumbersSeven = [1, 2, 3, 4, 5, 6, 7];

      let result1 = () =>
        lottery.checkTicket(ticketNumbersFive, luckyNumbersFive);
      let result2 = () =>
        lottery.checkTicket(ticketNumbersSeven, luckyNumbersSeven);

      expect(result1).to.throw(Error, "Invalid input!");
      expect(result2).to.throw(Error, "Invalid input!");
    });

    it("should return the right message if there are 3 to 5 winning numbers", function () {
      let ticketNumbers3 = [1, 2, 3, 4, 5, 6];
      let luckyNumbers3 = [1, 2, 3, 11, 12, 13];
      let ticketNumbers4 = [1, 2, 3, 4, 5, 6];
      let luckyNumbers4 = [1, 2, 3, 4, 11, 12];
      let ticketNumbers5 = [1, 2, 3, 4, 5, 6];
      let luckyNumbers5 = [1, 2, 3, 4, 5, 12];

      let result1 = lottery.checkTicket(ticketNumbers3, luckyNumbers3);
      let result2 = lottery.checkTicket(ticketNumbers4, luckyNumbers4);
      let result3 = lottery.checkTicket(ticketNumbers5, luckyNumbers5);

      expect(result1).to.equal("Congratulations you win, check your reward!");
      expect(result2).to.equal("Congratulations you win, check your reward!");
      expect(result3).to.equal("Congratulations you win, check your reward!");
    });
    it("should return the right message in case of JACKPOT", function () {
      let ticketNumbers = [1, 2, 3, 4, 5, 6];
      let luckyNumbers = [1, 2, 3, 4, 5, 6];

      let result1 = lottery.checkTicket(ticketNumbers, luckyNumbers);

      expect(result1).to.equal("You win the JACKPOT!!!");
    });
  });

  describe("secondChance()", function () {
    it("should throw an error in case of wrong input", function () {
      let tickedID = 5;
      let tickedIDStr = "5";
      let tickedIDObj = { n: 5 };
      let tickedIDArr = [5];

      let secondChangeWinningIDs = [];
      let secondChangeWinningIDsNum = 5;
      let secondChangeWinningIDsStr = "4";
      let secondChangeWinningIDsObj = { n: 4 };

      let result1 = () =>
        lottery.secondChance(tickedID, secondChangeWinningIDsNum);
      let result2 = () =>
        lottery.secondChance(tickedID, secondChangeWinningIDsStr);
      let result3 = () =>
        lottery.secondChance(tickedID, secondChangeWinningIDsObj);

      let result4 = () =>
        lottery.secondChance(tickedIDStr, secondChangeWinningIDs);
      let result5 = () =>
        lottery.secondChance(tickedIDArr, secondChangeWinningIDs);
      let result6 = () =>
        lottery.secondChance(tickedIDObj, secondChangeWinningIDs);

      expect(result1).to.throw(Error);
      expect(result2).to.throw(Error);
      expect(result3).to.throw(Error);
      expect(result4).to.throw(Error);
      expect(result5).to.throw(Error);
      expect(result6).to.throw(Error);
    });

    it("should return the right message whether or not the ticket is in the tickedID", function () {
      let ticketID = 1;
      let ticketID2 = 8;
      let secondChanceWinningTicketIDs = [1, 2, 3, 5, 6];

      let result1 = lottery.secondChance(
        ticketID,
        secondChanceWinningTicketIDs
      );

      let result2 = lottery.secondChance(
        ticketID2,
        secondChanceWinningTicketIDs
      );

      expect(result1).to.equal("You win our second chance prize!");
      expect(result2).to.equal("Sorry, your ticket didn't win!");
    });
  });
});
