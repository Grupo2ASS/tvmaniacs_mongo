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
function bfs(adjacency_lists, start){

};



conn = new Mongo();
db = conn.getDB("tvdb");
query = db.actors.find({name : "test"}, {data: true});
bfs(query["data"], "1"); // 1 should be Kevin Bacon later
