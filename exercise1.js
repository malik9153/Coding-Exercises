//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.


function addBinary(a, b) {
  let num = a + b;
  let binary = Number(num).toString(2);
  return binary;
}
