const bodyParser = require('body-parser');
const express = require('express');
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

var items = [];

app.get("/",function(req,res){
    var today = new Date();
    var options = {
        weekday :"long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US", options);
//the options parameter is passed in for passing options object to the date, and encoding it in english us(which is the locale thats why to locale date string, can write hi-IN for hindi as well).
    res.render("list",{kindOfDay: day, newListItems:items});
})

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});






app.listen(3000,function(){
    console.log("The server is running");
})