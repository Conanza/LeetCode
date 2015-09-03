# Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
# Return the sum of the three integers. You may assume that each input would have exactly one solution.
#
#For example, given array S = {-1 2 1 -4}, and target = 1.
#
#The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  sorted_nums = nums.sort
  closest_sum = sorted_nums[0..2].inject(:+)

  sorted_nums.each_with_index do |num, i|
    current_num = num

    j = i + 1
    k = sorted_nums.length - 1
    while k > j
      second_num = sorted_nums[j]
      third_num = sorted_nums[k]
      candidate_sum = current_num + second_num + third_num
      dist_from_target = (current_num + second_num + third_num - target).abs

      if candidate_sum > target
        k -= 1
      elsif candidate_sum < target
        j += 1
      else
        return candidate_sum
      end

      if dist_from_target < (closest_sum - target).abs
        closest_sum = candidate_sum
      end
    end
  end

  return closest_sum
end

p three_sum_closest([-1, 2, 1, -4], 1) == 2
