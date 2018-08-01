var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var output = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var value = value;
    someInstance[value] = value;
    count++;
  };

  someInstance.dequeue = function() {
    count--;
    var mostRecentItem = Object.keys(someInstance)[3];
    output = mostRecentItem;
    if (Object.keys(someInstance).length > 3) {
      delete someInstance[mostRecentItem];
      return output;
    }
  };

  someInstance.size = function() {
    if (count <= 0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};
