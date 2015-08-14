// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var charsSeen = {};
  for (var i = 0, n = s.length; i < n; i++) {
    if (charsSeen[s[i]]) {
      charsSeen[s[i]] += 1;
    } else {
      charsSeen[s[i]] = 1;
    }
  }

  for (i = 0; i < n; i++) {
    if (!charsSeen[t[i]]) {
      return false;
    }
    charsSeen[t[i]] -= 1;
  }

  for (letter in charsSeen) {
    if (charsSeen[letter] !== 0) {
      return false;
    }
  }

  return true;
};


console.log(isAnagram("anagram", "nagaram") === true);
console.log(isAnagram("rat", "car") === false);
console.log(isAnagram("ab", "ba") === true);
