// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  var seen = [];

  for (var i = 0; i < nums.length; i++) {
    if (seen.indexOf(nums[i]) !== -1) {
      return true;
    }
    seen.push(nums[i]);
  }

  return false;
};

console.log(containsDuplicate([1,1,2,3,4,5]) === true);
console.log(containsDuplicate([1,2,3,4,5]) === false);
