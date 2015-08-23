// You are given two linked lists representing two non-negative numbers.
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var output = new ListNode(null);
  var currentNode1 = l1;
  var currentNode2 = l2;

  var currentOutput = output;
  var carry = false;
  while (currentNode2 || currentNode1) {
    var sum = 0;
    if (currentNode1 && currentNode2) {
      sum = currentNode2.val + currentNode1.val;
      currentNode2 = currentNode2.next;
      currentNode1 = currentNode1.next;
    } else if (!currentNode2) {
      sum = currentNode1.val;
      currentNode1 = currentNode1.next;
    } else if (!currentNode1) {
      sum = currentNode2.val;
      currentNode2 = currentNode2.next;
    }

    if (carry) {
      sum += 1;
    }
    var value = sum % 10;
    carry = sum > 9 ? true : false;

    if (!currentNode2 && !currentNode1) {
      currentOutput.val = value;
      if (carry) {
        currentOutput.next = new ListNode(1);
      } else {
        currentOutput.next = null;
      }
    } else {
      currentOutput.val = value;
      currentOutput.next = new ListNode(null);
      currentOutput = currentOutput.next;
    }
  }

  return output;
};



two = new ListNode(2);
four = new ListNode(4);
three = new ListNode(3);
two.next = four;
four.next = three;

five = new ListNode(5);
six = new ListNode(6);
four2 = new ListNode(4);
five.next = six;
six.next = four2;

console.log(addTwoNumbers(two, five));

two.next = six;
six.next = null;

five.next = four;
four.next = null;
console.log(addTwoNumbers(two, five));


six.next = null;
console.log(addTwoNumbers(six, null));
