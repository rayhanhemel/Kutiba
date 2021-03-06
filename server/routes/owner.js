const router = require("express").Router();
const Owner = require("../models/owner");

//POST api - create a new owner
router.post("/owners", async (req, res) => {
    try{
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        await owner.save();
        res.json({
            success: true,
            message: "Successfully created a new owner"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET request - get all owners
router.get("/owners", async(rec, res) => {
    try {
        let owners = await Owner.find();

        res.json({
            owners: owners
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;