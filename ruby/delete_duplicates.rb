# Remove Duplicates from Sorted List Total
# Given a sorted linked list, delete all duplicates such that each element appear only once.
#
# For example,
# Given 1->1->2, return 1->2.
# Given 1->1->2->3->3, return 1->2->3.
#
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

def delete_duplicates(head)
  return if head.nil?
  return head if head.next.nil?

  if head.next.val == head.val
    head.next = head.next.next
    delete_duplicates(head)
  else
    delete_duplicates(head.next)
  end

  return head
end

node1 = ListNode.new(1)
node1_1 = ListNode.new(1)
node2 = ListNode.new(2)
node3 = ListNode.new(2)
node4 = ListNode.new(3)
node1.next = node1_1
node1_1.next = node2
node2.next = node3
node3.next = node4

p node1
puts
p delete_duplicates(node1)
