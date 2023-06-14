let express=require("express");
let mongodb=require("mongodb");

let nareshIT=require("mongodb").MongoClient;

//assert is used to handle the error
let assert=require("assert");
var url="mongodb://localhost:27017/bookshop";

//to add the images we should have to add "multer" module
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
// console.log(upload);
let image=require("express").Router()
.post("/",
		upload.single("image"),(req,res)=>{
			nareshIT.connect(url,(err,db)=>{
				assert.equal(null,err);
				insertDocument(db,'public/images/uploads/'
					+req.file.filename,()=>{
						db.close();
						res.json({"message":"Image Uploaded Succesfully"});
					})
			})
		});

var insertDocument=function(db,filepath,callback){
	var collection=db.collection('addbook');
	collection.insertOne({'imagepath':filepath},(err,result)=>{
		assert.equal(err,null);
		callback(result);
	})
}

	module.exports=image;

// app.listen(8008);
// console.log("server is listening on port:8008");