

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = [k, v];
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push(value);
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i] === null) {
        
      } else if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      }
    }
    this._storage.get(index).push(value);
  }
  
  this._counter++;
  
  var percent = this._counter / this._limit;
  if (percent > .75) {
    var oldValues = [];
    this._storage.each(function(storageIndex, index, storage) {
      if (storageIndex !== undefined) {
        for (var i = 0; i < storageIndex.length; i++) {
          oldValues.push(storageIndex[i]);
          // storageIndex[i] = null;
        }
      }
    });
    this._limit = this._limit * 2;
    var newStorage = LimitedArray(this._limit);
    this._counter = 0;
    this._storage = newStorage;
    for (var i = 0; i < oldValues.length; i++) {
      this.insert(oldValues[i][0], oldValues[i][1]);      
    }
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
  
  if (this._storage.get(index) === undefined || this._storage.get(index) === null) {
    return undefined;
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }

  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     return this._storage[index][i][1];
  //   }
  // }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage.get(index).length; i++ ) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
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


