const mongoose=require("mongoose");
const organizerSchema=new mongoose.Schema({
    profilePicture:String,
    firstName:String,
    lastname:String,
    userName:String,
    password:String,
    email:String,
    phoneNumber:String,
    qrcode:String,
    membershipId: { type: Schema.Types.objectId, ref: 'memberships' },
});
const Organizer=mongoose.model("organizers",organizerSchema);
module.exports = Organizer;