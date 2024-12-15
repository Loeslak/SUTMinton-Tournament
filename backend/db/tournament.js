const mongoose=require("mongoose");
const tournamentSchema=new mongoose.Schema({
    promoteImage:String,
    tourName:String,
    tourTagline:String,
    deadlineOfRegister:String,
    startTour:Date,
    endTour:Date,
    participants:Number,
    registFee:Number,
    rule:String,
    organizerId: { type: Schema.Types.objectId, ref: 'organizers' },
    reviewId: { type: Schema.Types.objectId, ref: 'reviews' },
});
const Tournament=mongoose.model("tournaments",tournamentSchema);
module.exports = Tournament;