// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321
// 32bit integers: -2,147,483,648 through 2,147,483,647
//
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var number = Math.abs(x);

  if (number < 10) {
    return x;
  }

  var multiplier = x < 0 ? -1 : 1;
  var digits = [];

  while (number > 0) {
    var result = number % 10;
    digits.push(result);
    number = Math.floor(number / 10);
  }

  var newNumber = 0, power = digits.length - 1;
  digits.forEach(function(digit) {
    newNumber += digit * Math.pow(10, power);
    power -= 1;
  });
  newNumber *= multiplier;
  
  if (newNumber >= -2147483648 && newNumber <= 2147483647) {
    return newNumber;
  } else {
    return 0;
  }
};


console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(100) === 1);
console.log(reverse(0) === 0);
console.log(reverse(1534236469) === 0);
