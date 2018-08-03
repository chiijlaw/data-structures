var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  //newTree.children[counter] = newTree;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;

  var goDeeper = function(collection, target) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].value === target) {
        return result = true;
      } else if (collection[i].children.length > 0) {
        goDeeper(collection[i].children, target);
      }
    }
  };

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return result = true; 
    } else if (this.children[i].children.length > 0) {
      goDeeper(this.children[i].children, target);
    }
  }
  
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
