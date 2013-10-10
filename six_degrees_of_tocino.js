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
var Set = function() {}
Set.prototype.add = function(o) { this[o] = true; }
Set.prototype.remove = function(o) { delete this[o]; }
Set.prototype.has = function(o) {return (o in this);}


function bfs(adjacency_lists, start){
	var queue = [];
	var set = new Set();

};



var conn = new Mongo();
var db = conn.getDB("tvdb");
var query = db.actors.find({name : "test"}, {data: true});
var bacon = query["data"].filter(function(x) { return x["name"]== "1"; })[0]; // 1 should be Kevin Bacon
bfs(query["data"], bacon);
