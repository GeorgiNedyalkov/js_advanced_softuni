console.log("Problem 1");

function echo(str) {
  console.log(str);
  console.log(str.length);
}

echo("What up");
echo("Hello, JavaScript!");
echo("Strings are easy");

console.log("Problem 2");

function sumStringLentgh(str1, str2, str3) {
  const sumLength = str1.length + str2.length + str3.length;
  const averageLength = Math.floor(sumLength / 3);
  console.log(sumLength);
  console.log(averageLength);
}

sumStringLentgh("chocolate", "ice cream", "cake");
sumStringLentgh("paste", "5", "22.3");

console.log("Problem 3");

function findLargestNumber(num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
}

findLargestNumber(5, -3, 16);
findLargestNumber(-3, -5, -22.5);

console.log("Problem 4");

function calcCircleArea(input) {
  const inputType = typeof input;

  if (inputType === "number") {
    const circleArea = Math.PI * Math.pow(input, 2);
    console.log(circleArea.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
  }
}

calcCircleArea("name");
calcCircleArea("5");
calcCircleArea(5);

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
  }

  console.log(result);
}

calculator(6, 5, "+");
calculator(6, 5, "-");
calculator(6, 5, "*");
calculator(6, 5, "/");
calculator(6, 5, "%");
calculator(6, 5, "**");

console.log("Problem 6");

function sumOfNumbers(n, m) {
  let sum = 0;
  const num1 = Number(n);
  const num2 = Number(m);

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");

console.log("Problem 7: Day of Week");

function dayOfWeek(day) {
  let result;

  switch (day) {
    case "Monday":
      result = 1;
      break;
    case "Tuesday":
      result = 2;
      break;
    case "Wednesday":
      result = 3;
      break;
    case "Thursday":
      result = 4;
      break;
    case "Friday":
      result = 5;
      break;
    case "Saturday":
      result = 6;
      break;
    case "Sunday":
      result = 7;
      break;
    default:
      console.log("error");
  }
  console.log(result);
}

dayOfWeek("Monday");
dayOfWeek("Tuesday");
dayOfWeek("Wednesday");
dayOfWeek("Thursday");
dayOfWeek("Friday");
dayOfWeek("Saturday");
dayOfWeek("Sunday");
dayOfWeek("Invalid");

console.log("Problem 8: Days in a month");

function daysInMonth(month, year) {
  const isLeapYear = year % 4 === 0;

  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }

  if (isLeapYear && month === 2) {
    days++;
  }

  console.log(days);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);

console.log("Problem 9: Square of Stars");

function printSquareOfStars(num = 5) {
  let result = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += "* ";
    }
    result += "\n";
  }

  console.log(result);
}

printSquareOfStars(1);
printSquareOfStars(2);
printSquareOfStars(7);
printSquareOfStars();

console.log("Problem 10: Aggregate Elements");

function aggregateElements(arr) {
  const concatResult = "";

  const sumElements = arr.reduce((prev, current) => prev + current, 0);
  const inverseSum = arr.reduce((prev, current) => 1 / prev + 1 / current, 0);

  console.log(sumElements);
  console.log(inverseSum);
}

aggregateElements([1, 2, 3]);
