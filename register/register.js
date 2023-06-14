//it is used to create the module
//this module, used to register the new user.
//import mongodb module
let mongodb = require("mongodb");
//create the mongo client
let mobin = mongodb.MongoClient;
//To encrypt the password
let bcrypt=require("bcrypt");
// let {uname,upwd,dob,email,languages,gender}=req.body;   
let register = require("express").Router()
        .post("/",(req,res)=>{
                async function hash(){
                let password=req.body.upwd;
                let salt=await bcrypt.genSalt(10);
                // let password="mobin123";
                let hashUpwd=await bcrypt.hash(password,salt);
                console.log(salt);
                console.log(hashUpwd);
                
        // hash();
    mobin.connect("mongodb://localhost:27017/bookshop",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("login").insertOne(
                {
                  "uname":req.body.uname,
                  "upwd":hashUpwd,
                  "dob":req.body.dob,
                  "email":req.body.email,
                  "languages":req.body.languages,
                  "gender":req.body.gender
                },
              (err,result)=>{
                if(err) throw err;
                else{
                    res.send({"register":"success"});
                }
            });
        }
    });
}
hash();
});
module.exports = register;