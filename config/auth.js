// It is used to compare the client side token with the server side token
// client side token present in req header
// server side token present in token.js file
// so we have to import the "token.js"

let server_token=require("./token");

// Let's compare the tokens
//"req" coming from angular 
//"res" to to angular
// "next()" if token matches then "next" is like succesful

let auth=(req,res,next)=>{
    //coming from Angular
    let all_headers=req.headers;
    // take the client side token
    let client_token=all_headers.token;
    //compare two tokens
    if(client_token==server_token.token){
        next();
    }
    else{
        res.send({"Unauthorized":"Error-404"})
    }
}

module.exports=auth;

