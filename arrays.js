const a = new Array();

const arr1 = new Array("apples", 1.2, true);

const sparseArr = [1, , , , , , 20];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printEvenIndexValues(arr) {
  let result = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 === 0) {
  //       result.push(arr[i]);
  //     }
  //   }

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  console.log(result.join(" "));
}

printEvenIndexValues([10, 20, 30, 40, 50]);
