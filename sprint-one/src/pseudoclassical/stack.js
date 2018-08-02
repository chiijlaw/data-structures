var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.output = 0;
};

Stack.prototype.push = function (val) {
  this[val] = val;
  this.count++;
};

Stack.prototype.pop = function () {
  this.count--;
  var lastItem = Object.keys(this)[Object.keys(this).length - 1];
  output = lastItem;
  if (Object.keys(this).length > 2) {
    delete this[lastItem];
    return output;
  }
};

Stack.prototype.size = function () {
  if (this.count <= 0) {
    return 0;
  } else {
    return this.count;
  }
};

