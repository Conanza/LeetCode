# Write an algorithm to determine if a number is "happy".
#
# A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
#
# Example: 19 is a happy number
#
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1

# @param {Integer} n
# @return {Boolean}
def is_happy(n)
  return true if n == 1
  numbers_seen = {}

  while true
    return false if numbers_seen[n]
    numbers_seen[n] = true

    n = sum_of_squared_digits(n)
    return true if n == 1
  end
end

def sum_of_squared_digits(num)
  num.to_s
    .chars
    .map { |char| char.to_i ** 2 }
    .inject(:+)
end

p sum_of_squared_digits(19) == 82
p sum_of_squared_digits(82) == 68
p sum_of_squared_digits(100) == 1

p is_happy(19) == true
p is_happy(2) == false
