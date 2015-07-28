# Given a binary tree, find its maximum depth.
#
# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

# @param {TreeNode} root
# @return {Integer}
def max_depth(root)
  return 0 if root.nil?

  queue = [[root, 1]]
  max_depth = 1

  until queue.empty?
    node, current_level = queue.shift
    queue << [node.left, current_level + 1] unless node.left.nil?
    queue << [node.right, current_level + 1] unless node.right.nil?

    if current_level > max_depth
      max_depth = current_level
    end
  end

  max_depth
end

four = TreeNode.new(4)
three = TreeNode.new(3)
five = TreeNode.new(5)
seven = TreeNode.new(7)
six = TreeNode.new(6)
two = TreeNode.new(2)
one = TreeNode.new(1)

four.left = three
four.right = five
five.right = seven
seven.left = six
three.left = two
two.left = one
p max_depth(four)
