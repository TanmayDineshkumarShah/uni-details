var express = require('express');
var bodyParser=require('body-parser');
var cors=require('cors');

//var login=require('./routes/login');
var routes=require('./routes/routes');
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",routes);



app.listen(5000,function(){
    console.log("server started at port 5000");
});