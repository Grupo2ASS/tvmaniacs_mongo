function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("tvdb");
db.actors.find().forEach(printResult);
//var c = db.series.find( {}, { _id: 0, cast: 1 } );
//var series_cast = c.toArray();
//print(series_cast[1]);



/*otros:



cambiada:

conn = new Mongo();
db = conn.getDB("tvdb");
db.actors.find().forEach(printResult);

{ "_id" : ObjectId("52573e518d73a11f2f3ee90a"), "name" : "test", 
"data" : [ 	
	{ 	
	"name" : "1", 	"list" : [ 	"2", 	"5" ], 	"degree" : 0 
	}, 	
	{ 	
	"name" : "2", 	"list" : [ 	"1", 	"3", 	"5" ], 	"degree" : 0 
	}, 	
	{ 
	"name" : "3", 	"list" : [ 	"2", 	"5", 	"4" ], 	"degree" : 0 
	}, 	
	{ 	
	"name" : "4", 	"list" : [ 	"6", 	"5", 	"3" ], 	"degree" : 0 
	},
	{ 	
	"name" : "5", 	"list" : [ 	"1", 	"4", 	"2" ], 	"degree" : 0 
	}, 	
	{ 	
	"name" : "6", 	"list" : [ 	"4" ], 	"degree" : 0 
	} 
] 
}*/
