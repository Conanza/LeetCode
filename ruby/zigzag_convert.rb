# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
# (you may want to display this pattern in a fixed font for better legibility)
#
# P     A     H     N
# A  P  L  S  I  I  G
# Y     I     R
# And then read line by line: "PAHNAPLSIIGYIR"
# Write the code that will take a string and make this conversion given a number of rows:
#
# string convert(string text, int nRows);
# convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

def convert(s, num_rows)
  buckets = Hash.new { |h, k| h[k] = [] }

  i = 0
  counter = 0
  while i < s.length
    buckets[counter] << s[i]
    counter += 1
    i += 1

    if counter == num_rows
      (num_rows - 2).times do |j|
        backwards_idx = counter - (j + 2)
        buckets[backwards_idx] << s[i] if i < s.length
        i += 1
      end

      counter = 0
    end
  end

  converted_string = ""
  buckets.each do |k, bucket|
    converted_string += bucket.join("")
  end

  converted_string
end


p convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR"
# P       I        N
# A    L  S     I  G
# Y  A    H   R
# P       I
p convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI"
