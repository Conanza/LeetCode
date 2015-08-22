// Reverse a singly linked list.


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head;
  var currentNode = head;
  var nodes = [];

  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  for (var i = nodes.length - 1; i > 0; i--) {
    var node = nodes[i];
    var nextNode = nodes[i - 1];

    node.next = nextNode;
  }
  nodes[0].next = null;

  return nodes[nodes.length - 1];
};

one = new ListNode(1);
two = new ListNode(2);
three = new ListNode(3);
one.next = two;
two.next = three;
console.log(reverseList(one));

one.next = null;
console.log(reverseList(one));
