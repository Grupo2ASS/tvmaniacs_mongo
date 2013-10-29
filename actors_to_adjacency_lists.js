function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("mydb");
var query = db.series.find( {}, { _id: 0, cast: 1 } );
var array = new Array();
query.forEach(function(o){array.push(o)});

//**************************BEST APPROACH CON AGGREGATION**************************
/*
var ser = db.series.aggregate( { $unwind : "$series" },
                     { $unwind : "$series.cast" },
                     { $group  : { _id  : "$_id",
                                   cast : {$push:"$series.cast"}
                                 }
                     }
);
*/


//**************************BEST APPROACH CON MAP REDUCE**************************
/*
map = function() {
  for(var i in this.cast){
    key = { cast: this.cast[i] };
    value = 0;
    emit(key,value);
  }
}

reduce = function(key, values) {
  
}

 printjson(db.series.mapReduce(map, reduce, { out: "test"}));
 db.test.find().forEach(printjson);


*/
//**************************APPROACH DE EDU**************************
/*
var series;
var actors;
db.actors.find().forEach(function(a){
 actors = [];
 series = db.series.find({"name": { $in: //array de nombres de series del actor// }});
 series.forEach(function(s){
   //agregar a actors a todos menos al mismo actor **IMPORTANTE**

 });
 //filtrar repetidos en actors
 //agregar a collection adjacency lists la entrada correspondiente

});
*/
//**************************OTRAS PRUEBAS**************************

//var bacon = array.filter(function(x) { return x["name"]== "Madeleine Stowe"; })[0];
//print("aca: "+bacon);

/*
var series_cast = c.toArray();
var a = tojson(series_cast[1]);
print(a);
print("algo: "+a.cast[0].name);
*/


