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
