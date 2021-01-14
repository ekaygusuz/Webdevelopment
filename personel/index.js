const express = require("express");
const app =express();
app.set ("view engine", "ejs");
app.use(express.static(__dirname + "/files"));

var resim="/resimler/mcfly.jpg"
var isim="Emrehan KAYGUSUZ"
var resim4="/resimler/under.jpg"


app.get("/",function(reg,res){


  res.render("anasayfa",{ resim,isim,resim4}); //ejs dosyalari views icinde olmak zorunda
});

app.get("/about" , function(req , res){

var resim2="/resimler/hakkimda.jpg"


    res.render("about" ,{resim2});
});

app.get("/contact" , function(req , res){

var resim3="/resimler/iletisim.jpg"



    res.render("contact" ,{resim3});
});







app.listen(8000);
