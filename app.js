//jshint esversion:6
const express = require("express");
const bodyPaser = require("body-parser");

const app = express();

app.get("/", function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    if(today.getDay()=== 6 || today.getDay === 0){
        res.send("<h1>Yay Weekend!</h1>")
    }
    else{
        res.sendFile(__dirname+"/index.html")
    }
});

app.listen(3000,function(){
    console.log("Engine started 🚒")
});