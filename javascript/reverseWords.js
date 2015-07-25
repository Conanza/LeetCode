// Given an input string, reverse the string word by word.
//
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

var reverseWords = function(str) {
  var words = str.split(" ");

  var temp;
  for (var i = 0; i < Math.floor(words.length / 2); i++) {
    temp = words[words.length - 1 - i];

    words[words.length - 1 - i] = words[i];
    words[i] = temp;
  }

  return words.join(" ");
};

console.log(reverseWords("the sky is blue"));
