const mongoose=require("mongoose");
const playerSchema=new mongoose.Schema({
    profileImage:String,
    firstName:String,
    lastName:String,
    dateOfBirth:Date,
    gender:String,
    email:String,
    phoneNumber:String,
    levelSkill:String,
    managerId: { type: Schema.Types.objectId, ref: 'managers'},
});
const Player=mongoose.model("players",playerSchema);
module.exports = Player;