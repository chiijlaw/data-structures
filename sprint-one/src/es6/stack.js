class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.output = 0;
  }

  push(val) {
    this[val] = val;
    this.count++;
  }

  pop() {
    this.count--;
    var lastItem = Object.keys(this)[Object.keys(this).length - 1];
    this.output = lastItem;
    if (Object.keys(this).length > 2) {
      delete this[lastItem];
      return this.output;
    }
  }

  size() {
    if (this.count <= 0) {
      return 0;
    } else {
      return this.count;
    }
  }

}