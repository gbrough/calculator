function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 + number2;
}
function multiply(number1, number2) {
  return number1 + number2;
}
function divide(number1, number2) {
  return number1 + number2;
}
//(0°C × 9/5) + 32
function c2f(celsius, fahrenheit){
  fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = subtract(number1, number2);
alert(result);