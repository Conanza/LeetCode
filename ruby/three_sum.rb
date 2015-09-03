# Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
# Find all unique triplets in the array which gives the sum of zero.
# Note:
# Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
# The solution set must not contain duplicate triplets.
#     For example, given array S = {-1 0 1 2 -1 -4},
#
#     A solution set is:
#     (-1, 0, 1)
#     (-1, -1, 2)
# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
  sorted_nums = nums.sort
  solution_set = []

  sorted_nums.each_with_index do |num, i|
    j = i + 1
    k = nums.length - 1
    while j < k
      sum = num + sorted_nums[j] + sorted_nums[k]

      if sum == 0
        solution_set << [num, sorted_nums[j], sorted_nums[k]]
        k -= 1
      elsif sum > 0
        k -= 1
      else
        j += 1
      end
    end
  end
p solution_set
  solution_set.uniq
end

p [[-1,0,1], [-1,-1,2]].all? { |res| three_sum([-1,0,1,2,-1,-4]).include?(res) }
p [[-2,0,2],[-2, 1, 1]].all? { |res| three_sum([-2, 0, 1, 1, 2]).include?(res) }
