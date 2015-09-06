# Write a function to find the longest common prefix string amongst an array of strings.

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  longest_prefix = ""
  return longest_prefix if strs.empty?
  
  i = 0
  loop do
    letters = []
    strs.each do |str|
      letters << str[i]
    end

    if letters.all? { |ltr| ltr.nil? }
      break
    elsif letters.all? { |ltr| ltr == letters[0] }
      i += 1
      longest_prefix += letters[0]
    else
      break
    end
  end

  longest_prefix
end

p longest_common_prefix(["cat", "cats", "catsdogs"])
p longest_common_prefix([])
p longest_common_prefix([""])
