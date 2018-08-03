

// Instantiate a new graph
var Graph = function() {

  this.newGraph = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var name = node;
  this.newGraph[name] = [];
  //debugger;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  //debugger;
  for (var key in this.newGraph) {  
    if (key == node) {
      return result = true; 
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var connection = this.newGraph[node];
  for (i = 0; i < connection.length; i++) {
    this.removeEdge(node, connection[i]);
  }
  
  delete this.newGraph[node];
};

// Returns a boolean indicating whether two specifi ed nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for (var i = 0; i < this.newGraph[fromNode].length; i++) {
    if (this.newGraph[fromNode][i] === toNode) {
      return result = true;
    }
  }
  return result;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var index = this.newGraph[fromNode].indexOf(toNode);
  if (index > -1) {
    this.newGraph[fromNode].splice(index, 1);
  }  
  
  var indexRev = this.newGraph[toNode].indexOf(fromNode);
  if (indexRev > -1) {
    this.newGraph[toNode].splice(indexRev, 1);  
  }


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
  for (var key in this.newGraph) {
    cb(key);
  }
  

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


