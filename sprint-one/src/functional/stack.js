var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var output = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    var value = value;
    someInstance[value] = value;
    count++;
  };

  someInstance.pop = function() {
    count--;
    var lastItem = Object.keys(someInstance)[Object.keys(someInstance).length - 1];
    output = lastItem;
    if (Object.keys(someInstance).length > 3) {
      delete someInstance[lastItem];
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
