const express = require("express");
const router = express.Router();

const dogs = require("../models/dogs");


//controller routes

//index route
router.get("/", (req, res) => {
    res.send("Index page hit");
})

//end controllers
module.exports = router;