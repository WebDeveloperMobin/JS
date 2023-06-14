let mongodb=require('mongodb');
let mobin=mongodb.MongoClient;

// create a Router module 
let deleteRecord=require('express').Router()
    .delete("/",(req,res)=>{
        let obj={"bid":req.body.bid}
        // console.log("Data is Coming...")
        // console.log(obj);
        mobin.connect("mongodb://localhost:27017/bookshop",
        (err,db)=> {
            if (err) throw err;
            else{
                db.collection("addbook").deleteOne
                (obj,(err,result)=>{
                    // console.log(obj)
                    if (err) throw err;
                    else{
                        res.send({delete:"success"})
                    }
                })
            }
        })
    })

    module.exports=deleteRecord;
    