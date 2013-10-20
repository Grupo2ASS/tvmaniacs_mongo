conn = new Mongo();
db = conn.getDB("mydb");
var series;
var actors;
db.actors.find().forEach(function(a){
	actors = [];
	series = db.series.find({"name": { $in: /*array de nombres de series del actor*/ }});
	series.forEach(function(s){
		//agregar a actors a todos menos al mismo actor **IMPORTANTE**

	});
	//filtrar repetidos en actors
	//agregar a collection adjacency lists la entrada correspondiente

});