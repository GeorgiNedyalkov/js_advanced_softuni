function sumArrayElements(arr, startIndex, endIndex) {
  let sum = 0;
  // check if arr is an array
  if (
    arr instanceof Array === false &&
    arr.constructor.name !== "Array" &&
    !Array.isArray(arr)
  ) {
    return NaN;
  }

  // check if start index is less than 0
  if (startIndex < 0) {
    startIndex = 0;
  }

  // check is end index is bigger than array lenth
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  // iterate through elements in the array in the given range
  for (let i = startIndex; i <= endIndex; i++) {
    // add current element to sum
    sum += Number(arr[i]);
  }

  return sum;
}

console.log(sumArrayElements([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumArrayElements([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumArrayElements([10, "twenty", 30, 40], 0, 2));
console.log(sumArrayElements([], 1, 2));
console.log(sumArrayElements("text", 0, 2));
