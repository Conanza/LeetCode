// Given a linked list, remove the nth node from the end of list and return its head.
//
// For example,
//
//    Given linked list: 1->2->3->4->5, and n = 2.
//
//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n === 0) return head;

  var nodes = [];
  var currentNode = head;

  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  if (n === 1) {
    if (nodes.length === 1) {
      return null;
    } else {
      nodes[nodes.length - 2].next = null;
    }
  } else {
    var targetNode = nodes[nodes.length - n];
    targetNode.val = targetNode.next ? targetNode.next.val : null;
    targetNode.next = targetNode.next ? targetNode.next.next : null;
  }

  return nodes[0];
};

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
var l4 = new ListNode(4);
var l5 = new ListNode(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;

console.log(removeNthFromEnd(l1, 2));

l1.next = null
console.log(removeNthFromEnd(l1, 1));
