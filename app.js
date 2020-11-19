const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
var items = [];
app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  var day = today.toLocaleDateString("en-us", options);
  res.render("list", {
    kindofDay: day,
    newListItems : items
  })
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  console.log(item);
  items.push(item);
  res.redirect("/");
})




app.listen(3000, function() {
  console.log("Server started on port 3000")
});
