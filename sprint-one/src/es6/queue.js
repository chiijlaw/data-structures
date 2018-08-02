class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.output = 0;
  }

  enqueue (value) {
    this[value] = value;
    this.count++;
  }

  dequeue () {
    this.count--;
    var mostRecentItem = Object.keys(this)[2];
    this.output = mostRecentItem;
    if (Object.keys(this).length > 2) {
      delete this[mostRecentItem];
      return this.output;
    }
  }

  size ()	{
    if (this.count <= 0) {
      return 0;
    } else {
      return this.count;
    }
  }

}
