const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const dogController = require("./controllers/dogcontroller");

//middleware
app.use("/dogs", dogController);


app.listen(3000, ()=>{
    console.log("app is listening");
})