# Remove all elements from a linked list of integers that have value val.
#
# Example
# Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
# Return: 1 --> 2 --> 3 --> 4 --> 5

# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} head
# @param {Integer} val
# @return {ListNode}
def remove_elements(head, val)
  return if head.nil?
  queue = [head]
  keepers = []

  until queue.empty?
    node = queue.shift

    if node.val == val
      keepers.last.next = node.next unless keepers.empty?
    else
      keepers << node
    end

    queue << node.next unless node.next.nil?
  end

  keepers.first
end

one = ListNode.new(1)
two = ListNode.new(2)
six1 = ListNode.new(6)
three = ListNode.new(3)
four = ListNode.new(4)
five = ListNode.new(5)
six2 = ListNode.new(6)
one.next = two
two.next = six1
six1.next = three
three.next = four
four.next = five
five.next = six2

p remove_elements(one, 6)

one = ListNode.new(1)
two = ListNode.new(2)
one.next = two

p remove_elements(one, 1)
