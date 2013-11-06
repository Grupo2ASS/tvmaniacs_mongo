function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("mydb");

var series;
var actors;
var adj_list = db.adjacency_lists.find();
var x;

db.actors.find().forEach(function(a){
 var jsonCollection = [];
 // var currentActorFullName = JSON.stringify(a.first_name+" "+a.last_name);
 // var currentActorImdbId = JSON.stringify(a.imdb_id);
 // var seriesPerActor = JSON.stringify(a.series);
 //print("name          lkdsnlkfndslk  "+seriesPerActor);
 
 series = db.series.find({"imdb_id": {$in: a.series }});
 series.forEach(function(s){
 var actorExists;
 //print(s.cast);
 var currentActorImdbID = db.adjacency_lists.find({ name: a.imdb_id }).count();
 //print(currentActorImdbID);
 if(currentActorImdbID==0){ actorExists = false; }
 if(currentActorImdbID==1){ actorExists = true; }
 
 //print(tojson(s));
 if(actorExists==false){
  //jsonCollection.push({ name: a.imdb_id, list: s.cast, degree: 0});
  //print(s.name);
  x = { name: a.imdb_id, list: s.cast, degree: 0};
  db.adjacency_lists.insert(x);
 }
 if(actorExists==true){
  //print(s.name);
  var id = db.adjacency_lists.find({ name : a.imdb_id },{ _id : 1 });
  db.adjacency_lists.update({ _id : id }, { $set: { list: s.cast } });
 }
   //agregar a actors a todos menos al mismo actor **IMPORTANTE**

 });

});




//**************************BEST APPROACH CON AGGREGATION**************************
/*
jsonCollection.forEach(printjson);

var opcion1 = db.series.aggregate(
    { $unwind : "$cast" },
    { $group  : { _id  : "$_id",
                  cast : { $push : "$cast.name" }
                }
    }
    
);

// printjson(opcion1);
// var numSeries = JSON.stringify(opcion1.result.length);
// var res = JSON.stringify(opcion1.result[0].cast[0]);
// print(res);

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


