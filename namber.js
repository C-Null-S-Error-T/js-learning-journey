// var orangePrigee = 29;
// console.log(orangePrigee);
// console.log(typeof orangePrigee);
// var applePrice = '39';
// console.log(applePrice);
// console.log(typeof applePrice);
// to convert string to number we can use parseInt() or parseFloat() function;
// var orangePrigee = 29;
// var applePrice = 39;
// console.log(orangePrigee+applePrice);
// var orangePrigee = 29;
// var applePrice = '39';
// // var applePrice = parseInt(applePrice); // convert string to number;
// console.log(orangePrigee+applePrice);
//the floating point number spacial case calculation problem we can use toFixed() method to solve this problem;
// this is the problem of floating point number calculation;
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum); //the sum result is 0.30000000000000004 but we want the result is 0.3 so we can use toFixed() method to solve this problem;
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum.toFixed(1)); //the sum result is 0.3
// Node # toFixed() she convert a number into a string, rounding to a specified number of decimals. The toFixed() method formats a number using fixed-point notation.