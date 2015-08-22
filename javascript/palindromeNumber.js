// Determine whether an integer is a palindrome. Do this without extra space.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  }

  var div = 1;
  while (div <= x / 10) {
    div *= 10;
  }

  while (x !== 0) {
    var left = Math.floor(x / div);
    var right = x % 10;

    if (left != right) return false;

    x -= left * div;
    x = Math.floor(x / 10);
    div /= 100;
  }

  return true;
};


console.log(isPalindrome(141) === true);
console.log(isPalindrome(-141) === false);
console.log(isPalindrome(1564651) === true);
console.log(isPalindrome(11) === true);
console.log(isPalindrome(1) === true);
console.log(isPalindrome(100) === false);
console.log(isPalindrome(1000021) === false);
