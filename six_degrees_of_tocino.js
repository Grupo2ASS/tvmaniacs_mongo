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


conn = new Mongo();
db = conn.getDB("tvdb");
db.actors.find({name : "test"});

