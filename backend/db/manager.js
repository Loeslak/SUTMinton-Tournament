const mongoose=require("mongoose");
const managerSchema=new mongoose.Schema({
    profileImage:String,
    firstName:String,
    lastName:String,
    userName:String,
    password:String,
    email:String,
    phoneNumber:String,
});
const Manager=mongoose.model("managers",managerSchema);
module.exports = Manager;