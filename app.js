const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];



app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
    var today = new Date(); // Fixed unclosed parenthesis

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { listTitle: day, newListItems: items });

});


app.post("/", function (req, res) {
    let item = req.body.newItem;
    console.log(item);

    if (req.body.list === "Work list") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item); // No need to push to items here, it's already handled in other routes
    }
    res.redirect("/"); // Redirect to the appropriate page after logic is complete
});


app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})



app.listen(3000, function () {
    console.log("Engine started ");
});
