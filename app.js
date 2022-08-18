//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today  = new Date();
   
 let options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
 };   

  let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
   let item = req.body.newItem;
   items.push(item);

   res.redirect("/");

});



app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000");
});
