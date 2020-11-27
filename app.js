const express = require("express");
const bodyParser = require("body-parser");
const ejsLint = require('ejs-lint');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let items = [];
let workItems = [];
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
    listTitle: day,
    newListItems : items
  })
});

app.post("/",function(req,res){
  if(req.body.list == "work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
  var item = req.body.newItem;
  console.log(item);
  items.push(item);
  res.redirect("/");
})

app.get("/work", function(req, res){
  res.render("list",{
    listTitle: "work",
    newListItems : workItems
  });
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
})



app.listen(3000, function() {
  console.log("Server started on port localhost:3000")
});
