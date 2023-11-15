const express = require("express");
const BodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

// console.log(date());
const ejs = require("ejs");
const port = 4000;
const path = require("path");
const app = express();
app.use(BodyParser.urlencoded({extended:true}));
let items = ["Eat Bread", "Eat Mecroone", "Eat Potato"];
let workItems = ["Save_at_least_one_item_below"];
let myCleanPage = [];


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
   let day = date.getDate();
    


res.render("list", {listTitle : day, allNewItmes : items});
});
     
app.post("/", (req, res)=>{
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/mywork");
    } else {
        items.push(item);
        res.redirect("/");
    }
}); 

app.get("/mywork", (req, res)=>{
    res.render("list", {listTitle : "Work List", allNewItmes: workItems});

});

app.post("/", (req, res)=>{
    let item = req.body.newItem;
    console.log(item);
    if(req.body.list === "Clean"){
        myCleanPage.push(item);
        res.redirect("/page");
    } else {
        items.push(item);
        res.redirect("/");
    }
});
app.get("/page", (req, res)=>{
    res.render("list", {listTitle : "Clean list", allNewItmes : myCleanPage});
});


// app.post("/mywork", (req, res)=>{
//     let item = req.body.newItem;
//     items.push(item);
//     res.redirect("/");
// });

//app.use("/../public", express.static(path.join(__dirname + "/../public")))
app.get("/newitem", (req, res)=>{
    res.send("please add your item in todo list from the home page we are appreciate your experience on this website");
//    res.sendFile(__dirname + "/../public/index.html");
    
});

app.get("/contact", (req, res)=>{
    res.render("contact");
  
   

});
app.get("/about", (req, res)=>{
    res.render("about");
});



app.listen(port, ()=>{
    console.log("server listen on port no : " + port);
});

// const express = require("express");
// const BodyParser = require("body-parser");
// const bodyParser = require("body-parser");
// const port = 3000;
// const app = express();
// //take an array by default it push first three items to our todo list
// var items = ["Buy Food", "Cook Food", "Eat Food"];

// app.use(bodyParser.urlencoded({extends:true})); 


// app.set("view engine", "ejs");



// //when we load up our home page we go through this lines of code first

// app.get("/", (req, res)=>{
//     var today = new Date();
//     var options = {
//         weekday : "long", 
//         day : "numeric",
//         month : "long"
//     }
//     var day = today.toLocaleDateString("en-US", options);
//     //passiing values to ejs file mean template
//     res.render("list", {kindOfDay : day, newlistofitems : items});
// });

//-------------------------------------
    

//     app.post("/", (req, res)=>{
//         var item = req.body.newItem;
//         items.push(item);
//         res.redirect("/")
//     });

//  app.listen(port, ()=>{
//     console.log("Server listen");

//  });


//-------------------------------------

 // var currentDay = today.getDay();
    // var day = "";
    // switch (currentDay) {
    //     case 0:
    //         day = "Monday";
            
    //         break;
    //         case 1:
    //         day = "Tuesday";
            
    //         break;
    //         case 2:
    //         day = "Wednesday";
            
    //         break;
    //         case 3:
    //         day = "Thursday";
            
    //         break;
    //         case 4:
    //         day = "Friday";
            
    //         break;
    //         case 5:
    //         day = "Saturday";
            
    //         break;
    //         case 6:
    //             day = "Sunday";
                
    //             break;
    
    //     default:
    //         console.log("Error : the day is always equall to the " + currentDay);
    //         console.log("today is : "+ currentDay);
            
    //         break;
    // }



    