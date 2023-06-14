let express=require("express");
let app=express()
let bcrypt=require("bcrypt");

 app.post("/hash",(req,res)=>{
     function hash(){
        let salt= bcrypt.genSalt(10);
        let password="mobin123";
        let hashUpwd= bcrypt.hash(password,salt);
        console.log(salt);
        console.log(hashUpwd);
        }
 })

app.listen(5005,function(){
    console.log("Server is running on PORT:5005")
})
