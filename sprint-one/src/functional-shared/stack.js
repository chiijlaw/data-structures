var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  // newStack.push = push;
  // newStack.pop = pop;
  // newStack.size = size;
  newStack.count = 0;
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function (to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var stackMethods = {
	push: function (val) {
    	this[val] = val;
		this.count++;
	},
	pop: function () {
		this.count--;
		var lastItem = Object.keys(this)[Object.keys(this).length - 1];
		output = lastItem;
		if (Object.keys(this).length > 4) {
			delete this[lastItem];
			return output;
		}
	},
	size: function () {
		if (this.count <= 0) {
      		return 0;
    	} else {
      		return this.count;
    	}
    }
};


