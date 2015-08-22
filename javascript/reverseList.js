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
  var newTail = head;
  var newHead = head.next;
  newTail.next = null;

  while (newHead) {
    secondNode = newHead.next;
    newHead.next = newTail;

    newTail = newHead;
    newHead = secondNode;
  }

  return newTail;
};

one = new ListNode(1);
two = new ListNode(2);
three = new ListNode(3);
one.next = two;
two.next = three;
console.log(reverseList(one));

one.next = null;
console.log(reverseList(one));
