//jshint esversion:6
const express = require("express");
const bodyPaser = require("body-parser");

const app = express();
app.set('view engine', "ejs");


app.get("/", function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day="";

    if(today.getDay()=== 6 || today.getDay === 0){
        day = "weekend";
    }
    else{
        day = "weekday";
    }
    res.render("list", {kindOfDay: day})

    
});

app.listen(3000,function(){
    console.log("Engine started 🚒")
});