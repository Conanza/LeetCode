# Description:
#
# Count the number of prime numbers less than a non-negative number, n.

# @param {Integer} n
# @return {Integer}
def is_prime?(n)
  return false if n <= 1
  return true if n == 2

  (2..n / 2).each do |divisor|
    return false if n % divisor == 0
  end

  true
end

def count_primes(n)
  (2...n).select { |n| is_prime?(n) }.count
end


p is_prime?(2) == true
p is_prime?(3) == true
p is_prime?(4) == false
p is_prime?(5) == true
p is_prime?(8) == false
p is_prime?(7) == true

p count_primes(4)
