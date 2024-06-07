const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', "ejs");

app.get("/", function(req, res) {
    var today = new Date(); // Fixed unclosed parenthesis

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options); // Using toLocaleDateString

    res.render("list", { kindOfDay: day }); // Send data to template
});

app.listen(3000, function() {
    console.log("Engine started ");
});
