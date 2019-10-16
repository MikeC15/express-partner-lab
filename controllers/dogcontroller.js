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

//update
router.put("/:index", (req,res) => {
    req.body.isGoodBoy = req.body.isGoodBoy === 'on' ? true : false;
    dogs[req.params.index] = req.body;
    res.redirect('/dogs');
})

//edit 
router.get('/:index/edit', (req,res) => {
    console.log("edit route showing");
    res.render('edit.ejs',{
        dog: dogs[req.params.index],
        index: req.params.index
    })
})

//delete 
router.delete("/:index", (req,res) => {
    dogs.splice(req.params.index,1);
    res.redirect('/dogs');
})

//end controllers
module.exports = router;