# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
#
# The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

def is_valid(s)
  return false if s.length.odd?
  matches = {
    "}" => "{",
    "]" => "[",
    ")" => "("
  }
  left_brackets = []

  s.split("").each do |char|
    if char == "(" || char == "[" || char == "{"
      left_brackets << char
    elsif char == ")" || char == "]" || char == "}"
      return false if left_brackets.last != matches[char]

      left_brackets.pop
    end
  end

  left_brackets.empty?
end

p is_valid("()[]{}") == true
p is_valid("([)]{}") == false
p is_valid("([])") == true
p is_valid("([]{}){}") == true
p is_valid("((") == false
