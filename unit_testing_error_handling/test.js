function inner() {
  throw new RangeError("Here is my error");
}

function outer() {
  inner();
  console.log("this code is missed");
}

try {
  outer();
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
}
