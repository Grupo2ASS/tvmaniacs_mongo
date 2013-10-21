function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("mydb");
var query = db.series.find( {}, { _id: 0, cast: 1 } );
var array = new Array();
query.forEach(function(o){array.push(o)});

var bacon = array.filter(function(x) { return x["name"]== "Madeleine Stowe"; })[0];
print("aca: "+bacon);


/*
var series_cast = c.toArray();
var a = tojson(series_cast[1]);
print(a);
print("algo: "+a.cast[0].name);
*/


map = function() {
  for(var i in this.cast){
    key = { cast: this.cast[i] };
    value = 0;
    emit(key,value);
  }
}

reduce = function(key, values) {
  actor_list = { actors: [] };
  for(var i in values) {
    actor_list.series = values[i].series.concat(actor_list.actors);
  }
  return actor_list;
}

 printjson(db.series.mapReduce(map, reduce, { out: "test"}));
 db.test.find().forEach(printjson);






