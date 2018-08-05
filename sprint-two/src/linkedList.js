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
      newNode.previous = list.tail;
      list.tail = newNode;
      
    }
  };

  list.removeHead = function() {
    
    var oldHead = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;
    }
    return oldHead;

  };

  list.removeTail = function(node) {
    var temp = list.tail.value;
    // step through whole list
    // check node's next.
    // if node's next === temp, set lit.tail to this node
    
    // For singly linked lists!!!!!!
    //   var removeDeeper = function (node, target) {
    //     if (node.next.value === target) {
    //       list.tail = node;
    //       node.next = null;
    //     } else {
    //       removeDeeper(node.next, target);
    //     }
    //   };

    //   if (list.head.value === temp) {
    //     list.tail = null;
    //     list.head = null;
    //   } else {
    //     removeDeeper(list.head.next, temp);
    //   }

    list.tail = list.tail.previous;
    if (list.tail !== null) {
      list.tail.next = null;
    }
    return temp;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
// addTail is a constant O(1)
// removeHead is a constant O(1)
// contains is a linear O(n)
// removeTail is linear O(n)
 */
