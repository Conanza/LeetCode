// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var mergedArray = [];
  var i = 0, j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      mergedArray.push(nums2[j]);
      j++;
    } else if (j >= nums2.length) {
      mergedArray.push(nums1[i]);
      i++;
    } else if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }

    if (mergedArray.length === Math.floor((nums1.length + nums2.length) / 2) + 1) {
      if ((nums1.length + nums2.length) % 2 === 0) {
        var el1 = mergedArray[mergedArray.length - 1];
        var el2 = mergedArray[mergedArray.length - 2];
        return (el1 + el2) / 2;
      } else {
        return mergedArray[mergedArray.length - 1];
      }
    }
  }
};

var arr1 = [1, 2, 4];
var arr2 = [3, 5, 6, 7];
var arr3 = [1, 2, 3];
console.log(findMedianSortedArrays(arr1, arr2) === 4);
console.log(findMedianSortedArrays(arr1, arr3) === 2);
