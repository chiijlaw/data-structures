var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.count = 0;
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this[value] = value;
    this.count++;
  },
  dequeue: function() {
    this.count--;
    var mostRecentItem = Object.keys(this)[4];
    output = mostRecentItem;
    if (Object.keys(this).length > 4) {
      delete this[mostRecentItem];
      return output;
    }
  },
  size: function() {
    if (this.count <= 0) {
      return 0;
    } else {
      return this.count;
    }
  }
};


