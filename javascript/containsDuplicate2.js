// Given an array of integers and an integer k,
// find out whether there are two distinct indices i and j in the array
// such that nums[i] = nums[j] and the difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var seen = {};

  for (var i = 0, n = nums.length; i < n; i++) {
    if (seen[nums[i]] !== undefined) {
      if (i - seen[nums[i]] <= k) {
        return true;
      }
    }

    seen[nums[i]] = i;
  }

  return false;
};

console.log(containsNearbyDuplicate([1,2,3,4,1], 2) === false);
console.log(containsNearbyDuplicate([1,2,1,4,1], 2) === true);
console.log(containsNearbyDuplicate([1,2,0,3,1,4,1], 2) === true);
console.log(containsNearbyDuplicate([1,1], 2) === true);
