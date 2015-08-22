// Write a program to check whether a given number is an ugly number.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
//
// Note that 1 is typically treated as an ugly number.
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 1) {
    return true;
  } else if (num < 1) {
    return false;
  }

  for (var i = 1, n = Math.sqrt(num); i <= n; i++) {

    if (num % i === 0) {
      if (isPrime(i) && [2, 3, 5].indexOf(i) < 0) {
        return false;
      }

      if (isPrime(num / i) && [2, 3, 5].indexOf(num / i) < 0) {
        return false;
      }
    }
  }

  return true;
};

var primeCache = {};
function isPrime(num) {
  if (primeCache[num]) {
    return true;
  } else if (num <= 1) {
    return false;
  }

  if (num === 2) {
    primeCache[num] = true;
    return true;
  }

  for (var i = 2, n = Math.sqrt(num); i <= n; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  primeCache[num] = true;
  return true;
}

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(4) === false);
console.log(isPrime(5) === true);
console.log(isPrime(0) === false);
console.log(isPrime(-2) === false);


console.log(isUgly(1) === true);
console.log(isUgly(6) === true);
console.log(isUgly(8) === true);
console.log(isUgly(7) === false);
console.log(isUgly(14) === false);
