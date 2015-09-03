# Given a linked list, swap every two adjacent nodes and return its head.
#
# For example,
# Given 1->2->3->4, you should return the list as 2->1->4->3.
#
# Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
  return head if head.nil? || head.next.nil?
  
  counter = 0
  grandparent_node = nil
  current_node = head
  prev_node = nil
  new_head = nil

  while current_node
    counter += 1

    if counter.even?
      new_head = current_node if counter == 2
      grandparent_node.next = current_node if grandparent_node
      prev_node.next = current_node.next
      current_node.next = prev_node

      grandparent_node = current_node
      current_node = prev_node.next
    else
      grandparent_node = prev_node
      prev_node = current_node
      current_node = current_node.next
    end
  end

  new_head
end


one = ListNode.new(1)
two = ListNode.new(2)
three = ListNode.new(3)
four = ListNode.new(4)

one.next = two
two.next = three
three.next = four
# 1-2-3-4, 2-1-3-4, 2-1-4-3
p swap_pairs(one)

one.next = two
two.next = nil
# 1-2, 2-1
p swap_pairs(one)
