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
	visited.add(bacon["name"]);
	while(queue.length > 0){
		current_actor = queue.shift();
		//print("current actor is: ");
		//printjson(current_actor);
		var next_actor;
		for (var i = 0; i < current_actor["list"].length; i++) {
			next_actor = graph.filter(function(o){
				return o["name"]==current_actor["list"][i];
			})[0];
		//	print("next actor is: ");
		//	printjson(next_actor);
			if(!visited.has(next_actor["name"])){
		//		print("visited");
				visited.add(next_actor["name"]);
				next_actor["degree"] = current_actor["degree"] + 1;
				db.adjacency_lists.update( { "name": next_actor["name"] },
                 {
                   $set: { "degree": next_actor["degree"] },
                 } );
				queue.push(next_actor);
		//		print("queue");
		//		printjson(queue);
			}/*else{
				print("not visited");
			}*/
		};

	}

};


//initializers
var conn = new Mongo();
var db = conn.getDB("tvdb");
var query = db.adjacency_lists.find();
var graph = new Array();
query.forEach(function(o){graph.push(o)});
var bacon = graph.filter(function(x) { return x["name"]== "Kevin Bacon"; })[0]; // 1 should be Kevin Bacon
//printjson(bacon);
bfs(graph, bacon);

