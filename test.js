conn = new Mongo();
db = conn.getDB("mydb");

var series;
var actors;
print("hola");

var ser2 = db.series.aggregate( { $unwind : "$series" },
                     { $unwind : "$series.cast" },
                     { $group  : { _id  : "$_id",
                                   cast : { $push : "$series.cast" }
                                 }
                     }
);

var opcion1 = db.series.aggregate(
    { $unwind : "$cast" },
    { $group  : { _id  : "$_id",
                  cast : { $push : "$cast.name" }
                }
    }
    
);

var opcion2 = db.series.aggregate(
    { $unwind : "$cast" },
    { $project : {
        cast : 1
    } }
    
);

var res = JSON.stringify(opcion1.result[0].cast[0]);
print(res);
//printjson(opcion1);
//opcion1.forEach(printjson);
//db.series.find().forEach(printjson);
