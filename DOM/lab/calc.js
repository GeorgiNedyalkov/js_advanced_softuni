function calc() {
  let num1 = document.getElementById("firstNum").value;
  let num2 = document.getElementById("secondNum").value;

  let sum = Number(num1) + Number(num2);

  document.getElementById("sum").value = sum;
}
