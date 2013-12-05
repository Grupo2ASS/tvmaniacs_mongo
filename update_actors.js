var conn = new Mongo();
var db = conn.getDB("tvdb");
var lists = db.adjacency_lists.find();
lists.forEach(function(l){
	db.actors.update( { "name": l["name"] },
                 {
                   $set: { "degree": l["degree"] }
                   
                 } )
	print("se actualizo "+l["name"]+" con degree "+l["degree"]);
	//lo raro y lo q falta esq no se actualiza db.actors en el campo degree
	//ya que los actors no tienen degree!
	//le agregue el degree a los actors en models.js pero aun asi no hay cambios
	//hay q ver tmb de dnd django obtiene el degree pa publicarlo

});
