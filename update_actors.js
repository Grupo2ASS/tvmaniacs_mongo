var conn = new Mongo();
var db = conn.getDB("tvdb");
var lists = db.adjacency_lists.find();
lists.forEach(function(l){
	db.actors.update( { "name": o["name"] },
                 {
                   $set: { "degree": o["degree"] }
                 } )
});
