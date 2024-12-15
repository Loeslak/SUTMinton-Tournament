const Membership = require("./../db/membership");


async function addMembership(model) {
    let membership = new Membership({
        tier:model.tier,
        duration:model.duration,
        price:model.price,
        tourFee:model.tourFee
    });
    await membership.save();
    return membership.toObject();
}
async function getMemberships(){
    let memberships = await Membership.find();
    return memberships.map(c=>c.toObject());
}
async function getMembershipById(id){
    let membership = await Membership.findById(id);
    return membership.toObject();
}
async function updateMembership(id, model) {
    await Membership.findOneAndUpdate({ _id: id}, model);
    return;
}
async function deleteMembership(id) {
    await Membership.findByIdAndDelete(id);
    return;
}


module.exports = { addMembership, updateMembership, deleteMembership, getMemberships, getMembershipById };