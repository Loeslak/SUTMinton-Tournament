const mongoose=require("mongoose");
const locationSchema=new mongoose.Schema({
    province:String,
    district:String,
    subDistrict:String,
    postalCode:String,
    detailAddress:String,
    other:String,
    organizerId: { type: Schema.Types.objectId, ref: 'organizers' },
});
const Location=mongoose.model("locations",locationSchema);
module.exports = Location;