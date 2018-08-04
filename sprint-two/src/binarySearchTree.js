var BinarySearchTree = function(value) {
  var biTree = {};
  biTree.value = value;
  biTree.left = null;
  biTree.right = null;
  _.extend(biTree, biTreeMethods);
  return biTree;
};

var biTreeMethods = {};

biTreeMethods.insert = function(value) {
  if (this.value < value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};

biTreeMethods.contains = function(target) {
  var result = false;  
  if (this.value === target) {
    return result = true;
  } else if (this.value < target) {
    if (this.right === null) {
      return false;
    }
    return result = this.right.contains(target);  
  } else if (this.value > target) {
    if (this.left === null) {
      return false;
    }
    return result = this.left.contains(target);
  }
  
  return result;
};

biTreeMethods.depthFirstLog = function(fun) {
  fun(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(fun);
  } 
  if ( this.right !== null) {
    this.right.depthFirstLog(fun);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
  insert is logerithmic O(log)
  contains is logerithmic O(log)
  depthFirstLog linear O(n)
 */
