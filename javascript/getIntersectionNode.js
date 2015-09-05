// Write a program to find the node at which the intersection of two singly linked lists begins.
// For example, the following two linked lists:
//
// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.
// Notes:
//
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var pathA = buildPath(headA);
  var pathB = buildPath(headB);
  var lastCommonNode = null;

  var nodeA, nodeB;
  while (pathA.length > 0 && pathB.length > 0) {
    nodeA = pathA.pop();
    nodeB = pathB.pop();

    if (nodeA.val === nodeB.val) {
      lastCommonNode = nodeA;
    }
  }

  return lastCommonNode;
};

function buildPath(node) {
  var path = [];
  var currentNode = node;
  while (currentNode) {
    path.push(currentNode);
    currentNode = currentNode.next;
  }
  return path;
}

var a1 = new ListNode("a1");
var a2 = new ListNode("a2");
var b1 = new ListNode("b1");
var b2 = new ListNode("b2");
var b3 = new ListNode("b3");
var c1 = new ListNode("c1");
var c2 = new ListNode("c2");
var c3 = new ListNode("c3");
a1.next = a2;
a2.next = c1;
c1.next = c2;
c2.next = c3;
b1.next = b2;
b2.next = b3;
b3.next = c1;
console.log(getIntersectionNode(a1, b1).val === "c1");
console.log(getIntersectionNode(c3, null) === null);
