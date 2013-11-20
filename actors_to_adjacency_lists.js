//checkList check that there are not repeated values and there is not the current actor.
function checkList(list,currentActorId){
  var finalList=[];
  for(var i=0;i<list.length;i++){
    var a = list.indexOf(list[i]);
    //print(a+" i "+i); 
    if(a==i && list[i]!=currentActorId){
      finalList.push(list[i]);
    }
  }
  return finalList;
}

conn = new Mongo();
db = conn.getDB("tvdb");

var series;
var adj_list = db.adjacency_lists.find();
var x;
//var i = 0; 
db.actors.find().forEach(function(a){
 var sList = []; //i++; print("actor"+i); var j = 0; 
 var currentActorId = a.imdb_id;
 series = db.series.find({"imdb_id": {$in: a.series }});
 series.forEach(function(s){
 //j++; print("serie"+j);
 for(var l=0; l<s.cast.length; l++){
  sList.push(s.cast[l]); 
 }
 var actorExists = db.adjacency_lists.find({ name: a.imdb_id }).count();
 
 if(actorExists==0){
  var checkedList = checkList(sList , currentActorId); 
  x = { name: a.imdb_id, list: checkedList, degree: 0};
  db.adjacency_lists.insert(x);
 }
 if(actorExists==1){
  db.adjacency_lists.find({ name : a.imdb_id },{ _id : 1 }).forEach(function(a){
    var checkedList = checkList(sList , currentActorId); 
    db.adjacency_lists.update({ _id : a._id }, { $set: { list: checkedList } });
  });
 }

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


