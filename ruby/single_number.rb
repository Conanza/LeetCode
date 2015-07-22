# Given an array of integers, every element appears twice except for one. Find that single one.
#
# Note:
# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  seen = Hash.new(0)

  nums.each { |num| seen[num] += 1 }

  seen.find { |k, v| v == 1 }[0]
end

p single_number([1,22,22,33,33]) == 1
p single_number([11,11,22,33,33]) == 22
