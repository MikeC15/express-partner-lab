const express = require("express");
const router = express.Router();

const dogs = require("../models/dogs");



//controller routes

//index route
router.get("/", (req, res) => {
    res.render('index.ejs', {
        dogs: dogs
    })
})

//delete 
router.delete("/:index", (req,res) => {
    dogs.splice(req.params.index,1);
    res.redirect('/dogs');
})

//end controllers
module.exports = router;