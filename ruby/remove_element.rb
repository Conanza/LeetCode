# Given an array and a value, remove all instances of that value in place and return the new length.
#
# The order of elements can be changed. It doesn't matter what you leave beyond the new length.
# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  return 0 if nums.length.zero?

  length = nums.length
  i = 0
  while i <= length - 1
    if nums[i] == val
      nums[i], nums[length - 1] = nums[length - 1], nums[i]
      length -= 1
    else
      i += 1
    end
  end

  length
end




array = [1, 2, 3, 4, 1]
p remove_element(array, 1) == 3
p remove_element([1], 1) == 0
p remove_element([], 2) == 0
p remove_element([], 0) == 0
p remove_element([2, 2], 2) == 0
p remove_element([1, 2], 2) == 1
