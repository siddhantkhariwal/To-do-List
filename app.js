const bodyParser = require('body-parser');
const express = require('express');
const https = require("https");
const date = require(__dirname + "/date.js");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine','ejs');

var items = [];
var workItems = [];

app.get("/",function(req,res){
    let day = date.getDay();
    res.render("list",{listTitle : day, newListItems:items});
})



app.post("/",function(req,res){
    console.log(req.body);
    var item = req.body.newItem;
    if(req.body.list ==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItems: workItems})
})

app.get("/about",function(req,res){
    res.render("about");
})

// app.post("/work", function(req,res){
//     var workItem = req.body.newItem;
//     workItems.push(workItem);
//     res.redirect("/work");
// })


app.listen(3000,function(){
    console.log("The server is running");
})