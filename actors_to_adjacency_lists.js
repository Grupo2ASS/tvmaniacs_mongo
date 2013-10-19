function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("mydb");
var c = db.series.find( {}, { _id: 0, cast: 1 } );
var series_cast = c.toArray();
var a = tojson(series_cast[1]);

print(a);

print("algo: "+a.cast[0].name);

