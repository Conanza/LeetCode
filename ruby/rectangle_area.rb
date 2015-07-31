# Find the total area covered by two rectilinear rectangles in a 2D plane.
#
# Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @param {Integer} d
# @param {Integer} e
# @param {Integer} f
# @param {Integer} g
# @param {Integer} h
# @return {Integer}
def compute_area(a, b, c, d, e, f, g, h)
  intersect_x_min = [a, e].max
  intersect_y_min = [b, f].max
  intersect_x_max = [c, g].min
  intersect_y_max = [d, h].min

  intersect_area = if intersect_y_max > intersect_y_min && intersect_x_max > intersect_x_min
    (intersect_x_max - intersect_x_min) * (intersect_y_max - intersect_y_min)
  else
    0
  end

  area1 = (c - a) * (d - b)
  area2 = (g - e) * (h - f)

  area1 + area2 - intersect_area
end

p compute_area(-3, 0, 3, 4, 0, -1, 9, 2)
