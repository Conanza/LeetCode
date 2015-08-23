// Given a string, find the length of the longest substring without repeating characters.
// For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
// For "bbbbb" the longest substring is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var longestSubstring = "";
  var testString = "";

  for (var i = 0, n = s.length; i < n; i++) {
    var letter = s[i];

    if (testString.indexOf(letter) === -1) {
      testString += letter;
    } else {
      testString = testString.slice(testString.indexOf(letter) + 1) + letter;
    }

    if (testString.length > longestSubstring.length) {
      longestSubstring = testString;
    }
  }
  return longestSubstring.length;
};

console.log(lengthOfLongestSubstring("bbbbb") === 1);
console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("abcabcbadb") === 4);
