//this file used to create the login module (post request)
//accepts the data from "client(angular)" and compares with "user_register" collection present in "mongodb" database
//generates the "token" based on successful authentication

let mongodb = require("mongodb");
let mobin = mongodb.MongoClient;
let generateToken = 
                require("../config/generateToken");
let obj = require("../config/token");

let login = require("express").Router()
            .post("/",(req,res)=>{
    mobin.connect("mongodb://localhost:27017/bookshop",(err,db)=>{
        if(err) throw err;
        else{
           db.collection("login")
             .find({"uname":req.body.uname},
                   {"upwd":req.body.upwd})
                   .toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        let token = generateToken(
                            {
                              "uname":req.body.uname,
                              "upwd":req.body.upwd
                            },
                            "hr@tcs.in"
                        );
                        obj.token = token;
                        res.send({
                            "login":"success",
                            "token":token
                        });
                    }else{
                        res.send({"login":"fail"});
                    }
                }
           });
        }
    });
});
module.exports = login;