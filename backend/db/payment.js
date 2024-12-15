const mongoose=require("mongoose");
const paymentSchema=new mongoose.Schema({
    slip:String,
    datePay:Date,
    totalFee:Number,
    accountName:String,
    tournamentId: { type: Schema.Types.objectId, ref: 'tournaments'},
});
const Payment=mongoose.model("payments",paymentSchema);
module.exports = Payment;