const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
let items = [];
app.get("/", function(req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  let day = today.toLocaleDateString("en-us", options);
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
  console.log("Server started on port localhost:3000")
});
