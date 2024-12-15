const mongoose=require("mongoose");
const payAddTourSchema=new mongoose.Schema({
    slip:String,
    datePay:Date,
    totalFee:Number,
    accountName:String,
    adminId: { type: Schema.Types.objectId, ref: 'admins' },
    organizerId: { type: Schema.Types.objectId, ref: 'organizers' },
    tournamentId: { type: Schema.Types.objectId, ref: 'tournaments'},
});
const PayAddTour=mongoose.model("payAddTours",payAddTourSchema);
module.exports = PayAddTour;