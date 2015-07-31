# Given a column title as appear in an Excel sheet, return its corresponding column number.
#
# For example:
#
#     A -> 1
#     B -> 2
#     C -> 3
#     ...
#     Z -> 26
#     AA -> 27
#     AB -> 28

# @param {String} s
# @return {Integer}
def title_to_number(s)
  column_vals = Hash[("A".."Z").to_a.zip((1..26).to_a)]
  sum = 0
  string = s.reverse

  i = 0
  while i < string.length
    sum += 26 ** i * column_vals[string[i]]

    i += 1
  end

  sum
end


p title_to_number("A") == 1
p title_to_number("B") == 2
p title_to_number("C") == 3
p title_to_number("Z") == 26
p title_to_number("AA") == 27
p title_to_number("AB") == 28
p title_to_number("BA") == 53
