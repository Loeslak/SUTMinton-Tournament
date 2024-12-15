const mongoose=require("mongoose");
const payMembershipSchema=new mongoose.Schema({
    pay:Number,
    slip:String,
    accountName:String,
    status:String,
    adminId: { type: Schema.Types.objectId, ref: 'admins' },
    membershipId: { type: Schema.Types.objectId, ref: 'memberships' },
});
const PayMembership=mongoose.model("payMemberships",payMembershipSchema);
module.exports = PayMembership;