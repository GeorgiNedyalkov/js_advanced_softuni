function sortArray(arr, order) {
  // store result
  let sortedArr = [];
  // check the order
  if (order === "asc") {
    sortedArr = arr.sort((a, b) => a - b);
  } else if (order === "desc") {
    sortedArr = arr.sort((a, b) => b - a);
  }

  return sortedArr;
}

function argumentInfo(...args) {
  let tally = {};

  for (let arg of args) {
    // get the type of arg
    let type = typeof arg;
    // get the value
    let value = arg;
    // create the string of type: value
    let summary = `${type}: ${value}`;

    // keep count of how many instances of a give type have occured.
    if (!tally[type]) {
      tally[type] = 1;
    } else {
      tally[type]++;
    }

    // print each description in a new line
    console.log(summary);
  }

  let tallyArr = [];

  for (let record in tally) {
    tallyArr.push({ count: tally[record], type: record });
  }
  // print a tally of each type in descending oreder
  let sortedArr = tallyArr.sort((a, b) => b.count - a.count);

  for (let record of sortedArr) {
    console.log(record.type + " = " + record.count);
  }
}
