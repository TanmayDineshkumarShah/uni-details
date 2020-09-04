var connection=require('./../config');
var bodyParser=require('body-parser');
var express = require('express');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports.authenticate=function(req,res){

    console.log("data dumped to api");
    var uid=req.body.uid;
    var password=req.body.pass;

    connection.query('SELECT * FROM User_id WHERE user_id=?',[uid],async function(error,results,fields){
            if(error){
                res.json({
                    "code":400,
                    "message":"error occured"
                });
            }
            else{
                if(results.length>0){
                    //const comparision=await bcrypt.compare(pass,results[0].password);
                    if(password===results[0].password){
                        res.json({
                            "code":200,
                            "message":"login successful"
                        });
                    }
                    else{
                        res.json({
                             "code":204,
                             "message":"Email and password does not match"
                        })
                      }
                    }
                else{
                  res.json({
                    "code":206,
                    "message":"Email does not exist"
                      });
                }
            }
    });
        
    
}


