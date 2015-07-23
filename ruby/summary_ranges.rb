# Given a sorted integer array without duplicates, return the summary of its ranges.
# For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

def summary_ranges(nums)
  return ["#{nums[0]}"] if nums.length == 1

  results = []
  start = nums[0]

  (1...nums.length).each do |i|
    prev_num, curr_num = nums[i - 1], nums[i]
    diff = curr_num - prev_num

    if diff != 1
      if start == prev_num
        results << "#{start}"
      else
        results << "#{start}->#{prev_num}"
      end

      if i == nums.length - 1
        results << "#{curr_num}"
      end

      start = curr_num
    elsif i == nums.length - 1
      results << "#{start}->#{curr_num}"
    end
  end

  results
end

p summary_ranges([0, 1, 2, 4, 5, 7])
p summary_ranges([0, 1, 2, 4, 5, 7]) == ["0->2","4->5","7"]
p summary_ranges([0, 1, 2, 4, 6, 8])
p summary_ranges([0, 1, 2, 4, 6, 8]) == ["0->2","4", "6","8"]
