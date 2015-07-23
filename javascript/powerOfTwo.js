// Given an integer, write a function to determine if it is a power of two.

var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }

  for (var i = 1; i <= n; i *= 2) {
    if (i === n) {
      return true;
    }
  }

  return false;
};

console.log(isPowerOfTwo(-1) === false);
console.log(isPowerOfTwo(0) === false);
console.log(isPowerOfTwo(1) === true);
console.log(isPowerOfTwo(2) === true);
console.log(isPowerOfTwo(32) === true);
