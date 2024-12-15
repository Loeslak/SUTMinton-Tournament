const express = require("express");
const router=express.Router();
const Membership = require("./../db/membership");
const { addMembership, updateMembership, deleteMembership, getMemberships, getMembershipById } = require("../handlers/membership-handler");
router.post("", async (req, res) => {
    console.log("here");
    let model = req.body;
    let result = await addMembership(model);
    res.send(result);
});

router.get("", async (req, res) => {
    let result = await getMemberships();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    let id = req.params["id"];
    let result = await getMembershipById(id);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    let model = req.body;
    let id = req.params["id"];
    await updateMembership(id, model);
    res.send({ message: "update" });
});

router.delete("/:id",async(req, res) => {
    let id = req.params["id"];
    await deleteMembership(id);
    res.send({ message: "delete" });
})

module.exports =router;