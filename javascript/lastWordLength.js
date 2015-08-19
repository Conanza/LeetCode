// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// For example,
// Given s = "Hello World",
// return 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var trimmedString = s.trim();

  if (!trimmedString) {
    return 0;
  } else {
    var splitString = trimmedString.split(" ");
    return splitString[splitString.length - 1].length;
  }
};

console.log(lengthOfLastWord("    ") === 0);
console.log(lengthOfLastWord(" is conan    ") === 5);
console.log(lengthOfLastWord("  hel lo th    re5  ") === 3);
