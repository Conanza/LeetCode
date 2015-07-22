// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * @constructor
 */
var MinStack = function() {
  this.store = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  if (this.store.length === 0) {
    this.store.push([x, x]);
  } else {
    this.store.push(
      [x, Math.min(x, this.getMin())]
    );
  }

  return;
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.store.pop();

  return;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1][0];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.store[this.store.length - 1][1];
};


var testStack = new MinStack();
testStack.push(4);
console.log(testStack.getMin() === 4);
testStack.push(2);
testStack.push(10);
console.log(testStack.getMin() === 2);
console.log(testStack.top() === 10);
testStack.push(3);
console.log(testStack.getMin() === 2);
