var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  this.storage.push(item);

};

setPrototype.contains = function(item) {

  return _.contains(this.storage, item);

};

setPrototype.remove = function(item) {

  var index = this.storage.indexOf(item);  
  if (index > -1) {
    this.storage.splice(index, 1);
  }

};

setPrototype.removeRandom = function() {
  var index = Math.floor(Math.random() * this.storage.length);
  return this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
  add is constant O(1)
  contains is linear O(n)
  remove is linear O(n)
  removeRandom is constant O(1)
 */
