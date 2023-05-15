function calcFruitExpense(fruit, grams, cost) {
  const kilos = (grams / 1000).toFixed(2);
  const totalPrice = (kilos * cost).toFixed(2);

  console.log(`I need $${totalPrice} to buy ${kilos} kilograms ${fruit}.`);
}

// calcFruitExpense("orange", 2500, 1.8);
// calcFruitExpense("apple", 1563, 2.35);

function greatestCommonDivisor(num1, num2) {
  let greatestCommonDivisor = 0;

  for (let i = 2; i < 10; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      greatestCommonDivisor = i;
    }
  }

  console.log(greatestCommonDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

function sameNumbers() {}
function previousDay() {}
function timeToWalk() {}
function roadRadar() {}
function cookingByNumbers() {}
function validityChecker() {}
function wordsUppercase() {}
