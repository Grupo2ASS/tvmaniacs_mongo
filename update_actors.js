var conn = new Mongo();
var db = conn.getDB("tvdb");
var lists = db.adjacency_lists.find();
lists.forEach(function(l){
	db.actors.update( { "imdb_id": l["name"] },
                 {
                   $set: { "bacon_number": l["degree"] }
                   
                 } )
	//print("se actualizo el actor "+l["name"]+" con bacon number "+l["degree"]);

});
