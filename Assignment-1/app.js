var calculator = require('./calculator.js')

var readline = require('readline-sync');

var firstNum = readline.question('Please enter first number : ');
var secondNum = readline.question('Please enter second number : ');

console.log("Result of addition : " + calculator.add(firstNum,secondNum));
console.log("Result of subtraction : " + calculator.sub(firstNum,secondNum));
console.log("Result of multiplication : " + calculator.mul(firstNum,secondNum));
console.log("Result of division : " + calculator.div(firstNum,secondNum));