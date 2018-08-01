var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.output = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (val) {
  this[val] = val;
  this.count++;
};

stackMethods.pop = function () {
  this.count--;
  var lastItem = Object.keys(this)[Object.keys(this).length - 1];
  output = lastItem;
  if (Object.keys(this).length > 2) {
    delete this[lastItem];
    return output;
  }
};

stackMethods.size = function () {
  if (this.count <= 0) {
    return 0;
  } else {
    return this.count;
  }
};

