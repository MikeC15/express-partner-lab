const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParder = require('body-parser');

app.listen(3000, ()=>{
    console.log("app is listening");
})