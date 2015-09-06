# Given two strings s and t, determine if they are isomorphic.
#
# Two strings are isomorphic if the characters in s can be replaced to get t.
#
# All occurrences of a character must be replaced with another character while preserving the order of characters.
# No two characters may map to the same character but a character may map to itself.
#
# For example,
# Given "egg", "add", return true.
# Given "foo", "bar", return false.
# Given "paper", "title", return true.
#
# Note:
# You may assume both s and t have the same length.
# @param {String} s
# @param {String} t
# @return {Boolean}
require "set"

def is_isomorphic(s, t)
  charmap = {}
  already_mapped_chars = Set.new

  (0...s.length).each do |i|
    s_char = s[i]
    t_char = t[i]

    if charmap[s_char]
      return false unless charmap[s_char] == t_char
    else
      return false if already_mapped_chars.include?(t_char)
      charmap[s_char] = t_char
      already_mapped_chars << t_char
    end
  end

  return true
end

p is_isomorphic("egg", "add") == true
p is_isomorphic("foo", "bar") == false
p is_isomorphic("paper", "title") == true
p is_isomorphic("foof", "goof") == false
