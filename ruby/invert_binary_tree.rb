# Invert a binary tree.
#
#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
#
# to
#
#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1
# Trivia:
# This problem was inspired by this original tweet by Max Howell:
# Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

# @param {TreeNode} root
# @return {TreeNode}
def invert_tree(root)
  return if root.nil? || !root.is_a?(TreeNode)
  queue = [root]

  until queue.empty?
    node = queue.shift
    node.left, node.right = node.right, node.left

    queue << node.left unless node.left.nil?
    queue << node.right unless node.right.nil?
  end

  root
end


four = TreeNode.new(4)
two = TreeNode.new(2)
seven = TreeNode.new(7)
one = TreeNode.new(1)
three = TreeNode.new(3)
six = TreeNode.new(6)
nine = TreeNode.new(9)
four.left, four.right = two, seven
two.left, two.right = one, three
seven.left, seven.right = six, nine

p invert_tree(four)
p four.left == seven
p seven.left == nine && seven.right == six
p four.right == two
p two.left == three && two.right == one

#      4
#    /   \
#   2     7
#    \   / \
#     3 6   9
#
# to
#
#      4
#    /   \
#   7     2
#  / \   /
# 9   6 3
four = TreeNode.new(4)
two = TreeNode.new(2)
seven = TreeNode.new(7)
one = TreeNode.new(1)
six = TreeNode.new(6)
nine = TreeNode.new(9)
four.left, four.right = two, seven
two.right = three
seven.left, seven.right = six, nine

p invert_tree(four)
p four.left == seven
p seven.left == nine && seven.right == six
p four.right == two
p two.left == three
