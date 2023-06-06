function inner() {
  throw new Error("a");
}

function outer() {
  inner();
  console.log("this code is missed");
}

try {
  outer();
} catch (e) {
  console.log("here");
}
