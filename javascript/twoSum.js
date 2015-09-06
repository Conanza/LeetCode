// Given an array of integers, find two numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
//
// You may assume that each input would have exactly one solution.
//
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numsSeen = {}, difference;

  for (var i = 0, n = nums.length; i < n; i++) {
    difference = target - nums[i];

    if (numsSeen[difference] !== undefined) {
      return [numsSeen[difference] + 1, i + 1];
    }

    numsSeen[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 6, 4, 6], 12));
console.log(twoSum([1, 2, 0, 4, 6], 2));
