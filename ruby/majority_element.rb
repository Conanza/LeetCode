# Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
#
# You may assume that the array is non-empty and the majority element always exist in the array.

def majority_element(nums)
  threshold = nums.length / 2
  num_counts = Hash.new(0)

  nums.each do |num|
    num_counts[num] += 1

    return num if num_counts[num] > threshold
  end
end

p majority_element([1, 1, 1, 2]) == 1
p majority_element([2, 3, 4, 1, 1, 1, 1]) == 1
p majority_element([1]) == 1
p majority_element([1, 1]) == 1
