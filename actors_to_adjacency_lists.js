function printResult(r){
  print(tojson(r));
};

conn = new Mongo();
db = conn.getDB("tvdb");
actors = db.actors.find().forEach(printResult);
