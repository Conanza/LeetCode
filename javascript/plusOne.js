// Given a non-negative number represented as an array of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var idx = digits.length - 1;
  var carryOver = false;
  while (idx >= 0) {
    if (carryOver) {
      digits[idx] += 1;

      if (digits[idx] < 10) {
        return digits;
      }
    }

    if (digits[idx] + 1 > 9) {
      digits[idx] = 0;
      carryOver = true;

      if (idx === 0) {
        digits.unshift(1);
      }
    } else {
      digits[idx] += 1;
      return digits;
    }

    idx -= 1;
  }

  return digits;
};

Array.prototype.compare = function (otherArr) {
  if (otherArr.length !== this.length) {
    return false;
  }

  for (var i = 0, n = this.length; i < n; i++) {
    if (this[i] !== otherArr[i]) {
      return false;
    }
  }

  return true;
};


console.log(plusOne([1, 2, 3]).compare([1, 2, 4]));
console.log(plusOne([9, 9]).compare([1, 0, 0]));
console.log(plusOne([1, 9, 9]).compare([2, 0, 0]));
console.log(plusOne([1, 9, 3, 9]).compare([1, 9, 4, 0]));
console.log(plusOne([8, 9, 9, 9]).compare([9, 0, 0, 0]));
