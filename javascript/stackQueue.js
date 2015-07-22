// Implement Queue using Stacks
// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Notes:
// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

/**
 * @constructor
 */
var Queue = function() {
  this.in = [];
  this.out = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.in.push(x);

  return null;
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  if (this.out.length === 0) {
    for (var i = 0, n = this.in.length; i < n; i++) {
      this.out.push(this.in.pop());
    }
  }

  this.out.pop();

  return null;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.out[this.out.length - 1] || this.in[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return (this.in.length === 0) && (this.out.length === 0);
};


var newQueue = new Queue();
console.log(newQueue.empty() === true);
newQueue.push(10);
newQueue.push(4);
newQueue.push(5);
newQueue.push(2);
console.log(newQueue.peek() === 10);
newQueue.pop();
console.log(newQueue.peek() === 4);
newQueue.pop();
console.log(newQueue.peek() === 5);
newQueue.push(13);
console.log(newQueue.peek() === 5);
newQueue.pop();
newQueue.pop();
newQueue.pop();
console.log(newQueue.empty() === true);
