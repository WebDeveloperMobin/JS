// let express=require("express");
// let app=express()
let mongodb=require('mongodb');
let mobin=mongodb.MongoClient;
let auth=require("../config/auth");

// create a router module
let AvailableBook=require('express').Router()
    .get("/",(req,res)=>{
        mobin.connect("mongodb://localhost:27017/bookshop",(err,db)=>{
            if(err) throw err;
            else{
                db.collection("addbook").find().toArray((err,result)=>{
                    if(err)throw err;
                    else{
                        // console.log(result);
                        res.send(result)
                    }
                })
            }
        })
    })
    module.exports=AvailableBook;