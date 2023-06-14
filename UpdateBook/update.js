let mongodb=require('mongodb');
let mobin=mongodb.MongoClient;

let update=require('express').Router()
    .post("/",(req,res)=>{
//create a update_object to deleted the record using p_id.        
        let update_object= {$set:{
            "bname":req.body.bname,
            "bauthor":req.body.bauthor,
            "bprice":req.body.bprice
        }}

        let condition_object ={
            "bid":req.body.bid
        }        
    
        mobin.connect("mongodb://localhost:27017/bookshop",
        (err,db)=>{
            console.log('data is coming');
           if (err) throw err;
           else{
               console.log("Here Too");
               db.collection("addbook").updateOne
               (condition_object,update_object),
               (err,result)=>{
                //    console.log('data is coming')
                if (err) throw err;
                else{
                    res.send({update:"success"});
                }
               }
           } 
        });
    });
    module.exports=update;