// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
//
// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.
//
// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var i = 0, j = s.length - 1;
  var regex = /[a-z0-9]/i;
  while (i < j) {
    if (!s[i].match(regex)) {
      i += 1;
    } else if (!s[j].match(regex)) {
      j -= 1;
    } else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }

      i += 1;
      j -= 1;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama") === true);
console.log(isPalindrome("race a car") === false);
console.log(isPalindrome("") === true);
console.log(isPalindrome("1a2") === false);
console.log(isPalindrome("1a1") === true);
