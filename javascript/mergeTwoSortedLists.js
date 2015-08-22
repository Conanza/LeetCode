// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

 // * Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l2) {
    return l1;
  } else if (!l1) {
    return l2;
  }
  var orderedNodes = [];

  var currentNode1 = l1, currentNode2 = l2;

  while (currentNode1 || currentNode2) {
    if (currentNode1 === null) {
      orderedNodes.push(currentNode2);
      currentNode2 = currentNode2.next;
    } else if (currentNode2 === null) {
      orderedNodes.push(currentNode1);
      currentNode1 = currentNode1.next;
    } else if (currentNode1.val < currentNode2.val) {
      orderedNodes.push(currentNode1);
      currentNode1 = currentNode1.next;
    } else {
      orderedNodes.push(currentNode2);
      currentNode2 = currentNode2.next;
    }
  }

  for (var i = 1, n = orderedNodes.length; i < n; i++) {
    orderedNodes[i - 1].next = orderedNodes[i];
  }
  orderedNodes[orderedNodes.length - 1].next = null;

  return orderedNodes[0];
};

var l1 = new ListNode(1);
var l3 = new ListNode(3);
var l4 = new ListNode(4);
l1.next = l3;
l3.next = l4;

var l2 = new ListNode(2);
var l5 = new ListNode(5);
var l6 = new ListNode(6);
l2.next = l5;
l5.next = l6;

console.log(mergeTwoLists(l1, l2));

l1.next = null;
l2.next = null;
console.log(mergeTwoLists(l2, l1));
