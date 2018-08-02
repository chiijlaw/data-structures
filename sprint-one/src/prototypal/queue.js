var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.output = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[value] = value;
  this.count++;
};

queueMethods.dequeue = function () {
  this.count--;
  var mostRecentItem = Object.keys(this)[2];
  output = mostRecentItem;
  if (Object.keys(this).length > 2) {
    delete this[mostRecentItem];
    return output;
  }
};

queueMethods.size = function ()	{
  if (this.count <= 0) {
    return 0;
  } else {
    return this.count;
  }
};
