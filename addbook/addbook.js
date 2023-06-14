let mongodb=require('mongodb');
// let auth=require('../config/auth');
let mobin=mongodb.MongoClient;

let assert=require("assert");
var multer=require("multer");

var storage=multer.diskStorage({

	destination:(req,file,cb)=>{
		cb(null,'public/images/uploads')
	},

	filename:(req,file,cb)=>{
		cb(null,file.fieldname+ '-' +Date.now()+ ".jpg")
	}
});

var upload=multer({storage:storage});
// create a Router module
let addbook=require("express").Router()
    .post("/",upload.single("image"),(req,res)=>{
        // upload.single("image"),(req,res)=>{
        mobin.connect("mongodb://localhost:27017/bookshop",(err,db)=>{
            
            if(err) throw err;
            else{
                db.collection('addbook').insertOne({"bid":req.body.bid,
                                                    "bname":req.body.bname,
                                                    "bauthor":req.body.bauthor,
                                                    "image":req.file.filename,
                                                    "bprice":req.body.bprice},(err,result)=>{
                                if(err) throw err;
                                else{
                                    res.send({"Added":"Successfully"})
                    }
                })
            }
        })
    })

    module.exports=addbook;