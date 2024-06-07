const { app } = require("./app");

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay;
    if (today.getDay() === 6 || today.getDay === 0) {
        res.send("<h1>Yay Weekend!</h1>");
    }
    else {
        res.send(currentDay);
    }
});
