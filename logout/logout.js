// here we have to delete the server side token
let server_token=require("../config/token");
//here we have to authenticator file
let auth=require("../config/auth");

let logout=require("express").Router()
       .get("/",[auth],(req,res)=>{
           server_token.token="";
           res.send({"logout":"success"})
       })

module.exports=logout;
       