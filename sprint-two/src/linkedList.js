var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  _.extend(list, Node);

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      //var temp = list.tail.next;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;

  };

  list.contains = function(target) {
    
    var result = false;
    var containDeeper = function (node, target) {
      if (node.value === target) {
        result = true;
      } else {
        if (node.next === null) {
          return false;
        } else {
          containDeeper(node.next, target);
        } 
      }
    };

    if (list.head.value === target) {
      result = true;
    } else {
      if (list.head.next === null) {
        return result = false;
      } else {
        containDeeper(list.head.next, target);
      }
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
// addTail is a constant O O(1)
// removeHead is a constant O O(1)
// contains is a linear O. O(n)
 */
