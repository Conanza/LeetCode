// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this in place with constant memory.
//
// For example,
// Given input array nums = [1,1,2],
//
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 1) return 1;

  var i = 1;
  while (i < nums.length) {
    var prevNum = nums[i - 1];
    var currentNum = nums[i];

    if (prevNum === currentNum) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};


console.log(removeDuplicates([1,1,2]) === 2);
console.log(removeDuplicates([1,2,3,4,4,5,5,5,6,7,7,8]) === 8);
console.log(removeDuplicates([1]) === 1);
