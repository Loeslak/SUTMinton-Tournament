const mongoose=require("mongoose");
const tournamentPlayerSchema=new mongoose.Schema({
    detail:String,
    tournamentId: { type: Schema.Types.objectId, ref: 'tournaments'},
});
const TournamentPlayer=mongoose.model("tournamentPlayers",tournamentPlayerSchema);
module.exports = TournamentPlayer;