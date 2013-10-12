/*
	BFS pseudo-code

  procedure BFS(G,v):
  	create a queue Q
    create a set V
    enqueue v onto Q
    add v to V
    while Q is not empty:
      t ← Q.dequeue()
      if t is what we are looking for:
        return t
      for all edges e in G.adjacentEdges(t) do
        u ← G.adjacentVertex(t,e)
        if u is not in V:
          add u to V
          enqueue u onto Q
    return none

*/
//prototype of a Set, will be used in bfs
var Set = function() {}
Set.prototype.add = function(o) { this[o] = true; }
Set.prototype.remove = function(o) { delete this[o]; }
Set.prototype.has = function(o) {return (o in this);}


//Breadth first search, starting on the element bacon
function bfs(graph, bacon){
	var queue = [];
	var visited = new Set();
	var current_actor;
	queue.push(bacon);
	visited.add(bacon);
	while(queue.length > 0){
		current_actor = queue.shift();
		printjson(current_actor);
		var next_actor;
		print(current_actor)
		for (var i = 0; i < current_actor["list"].length; i++) {
			next_actor = graph.filter(function(o){
				return o["name"]==current_actor["list"][i];
			})[0];

			if(!visited.has(next_actor)){
				visited.add(next_actor);
				next_actor["degree"] = current_actor["degree"] + 1;
				queue.push(nextActor);
			}
		};

	}
	/*
	print("graph is:");
	printjson(graph);
	print("bacon is:");
	printjson(bacon);
	*/
};


//initializers
var conn = new Mongo();
var db = conn.getDB("tvdb");
var query = db.adjacency_lists.find({name : "test"});
var graph;
query.forEach(function(o){graph = o["data"]});
var bacon = graph.filter(function(x) { return x["name"]== "1"; })[0]; // 1 should be Kevin Bacon
bfs(graph, bacon);
