

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var trough = this._storage.get(index) || [];
  var value = [k, v];
  //empty trough
  if (trough.length <= 0) {
    trough.push(value);
  } else {
    //not empty trough
    for (var i = 0; i < trough.length; i++) {
      //if trough has an array with value k matching
      if (trough[i][0] === k) {
        trough[i][1] = v;
        break;
      } 
    }
    trough.push(value);
  }
  
  this._counter++;
  this._storage.set(index, trough);
  
  var percent = this._counter / this._limit;
  if (percent > .75) {
    var oldValues = this._storage;
    // this._storage.each(function(storageIndex, index, storage) {
    //   if (storageIndex !== undefined) {
    //     for (var i = 0; i < storageIndex.length; i++) {
    //       oldValues.push(storageIndex[i]);
    //     }
    //   }
    // });
    this._limit = this._limit * 2;
    var newStorage = LimitedArray(this._limit);
    this._counter = 0;
    this._storage = newStorage;
    var context = this;
    // for (var i = 0; i < oldValues.length; i++) {
    //   this.insert(oldValues[i][0], oldValues[i][1]);      
    oldValues.each(function(trough) {
      if (!trough) { return; }
      for (var i = 0; i < trough.length; i++) {
        this.insert(trough[i][0], trough[i][1]);
      }
    }.bind(context));
  }
  
  // var value = [k, v];
  // if (Array.isArray(this._storage[index])) {
  //   for (var i = 0; i < this._storage[index].length; i++) {
  //     if (this._storage[index][i][0] === k) {
  //       this._storage[index][i][1] = v;
  //       break;
  //     }
  //   }  
  //   this._storage[index].push(value);
  // } else {
  //   this._storage[index] = [];
  //   this._storage[index].push(value);
  // }
  
  // this._counter++;
  // var percent = this._counter / this._limit;
  // if (percent >= .75) {
  //   this._limit = this._limit * 2;
  // }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var trough = this._storage.get(index) || [];
  for (var i = 0; i < trough.length; i++) {
    if (trough[i][0] === k) {
      return trough[i][1];
    }
  }
  return undefined;

  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     return this._storage[index][i][1];
  //   }
  // }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var trough = this._storage.get(index) || [];
  
  if (trough === undefined) {
    debugger;
  }
  for (var i = 0; i < trough.length; i++ ) {
    if (trough[i][0] === k) {
      trough.splice(i, 1);
    }
  }
  this._counter--;
  
  var percent = this._counter / this._limit;
  if (percent < .25) {
    var oldValues = [];
    this._storage.each(function(storageIndex, index, storage) {
      if (storageIndex !== undefined) {
        for (var i = 0; i < storageIndex.length; i++) {
          oldValues.push(storageIndex[i]);
          // storageIndex[i] = null;
        }
      }
    });
    this._limit = (this._limit / 2);
    var newStorage = LimitedArray(this._limit);
    this._counter = 0;
    this._storage = newStorage;
    for (var i = 0; i < oldValues.length; i++) {
      this.insert(oldValues[i][0], oldValues[i][1]);      
    }
  }
  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     delete this._storage[index][i][1];
  //   }
  // }

  // this._counter--;
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert is on average constant O(1)
    but in the worst case, it is linear O(n)
  retrieve is constant O(1)
  remove is on average constant O(1)
    but in the worst case, it is linear O(n)
  
 */


