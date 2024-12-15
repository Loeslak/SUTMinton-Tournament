const mongoose=require("mongoose");
const membershipSchema=new mongoose.Schema({
    tier:String,
    duration:Number,//กรอกเป็นเดือนเช่น 1 คือ 1 เดือน ,12 คือ 1 ปี
    price:Number,
    tourFee:Number,
});
const Membership=mongoose.model("memberships",membershipSchema);
module.exports = Membership;