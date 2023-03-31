const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");

const app = express();


var newItems =[];
var workItem =[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine' , 'ejs'); 

app.get("/",(req,res)=>{
    
    let day = date.getDate();
    res.render("list",{listTitle:day,newListItems:newItems});
});

app.post("/",(req,res)=>{
    console.log(req.body);
    var newItem = req.body.newItem;
    if(req.body.list === "Work List"){
        workItem.push(newItem);
        res.redirect("/work")
    }else{
        newItems.push(newItem);
        res.redirect("/");
    }
});

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItem})
});

app.get("/About",(req,res)=>{
    res.render("about")
});

app.listen("3000",()=>{
    console.log("server started on port 3000");
});