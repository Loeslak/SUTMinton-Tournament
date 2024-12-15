const mongoose=require("mongoose");
const sanbagSchema=new mongoose.Schema({
    detail:String,
    tournamentId: { type: Schema.Types.objectId, ref: 'tournaments'},
});
const Sandbag=mongoose.model("sandbags",sandbagSchema);
module.exports = Sandbag;