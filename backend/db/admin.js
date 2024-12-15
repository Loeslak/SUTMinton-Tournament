const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    password:String,
    email:String,
    phoneNumber:String,
    qrcode:String,
});
const Admin=mongoose.model("admins",adminSchema);
module.exports = Admin;