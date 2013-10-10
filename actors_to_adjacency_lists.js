conn = new Mongo();
db = conn.getDB("tvdb");
actors = db.actors.find();
printjson(actors);