// To make a RestApi
let express=require("express");
//To enable the port communication
let cors=require("cors");
// To get the data in the JSON format 
let bodyparser=require("body-parser");

//create a RestObject
let app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/login",require("./login/login"));
app.use("/addbook",require("./addbook/addbook"))
app.use("/register",require("./register/register"));
app.use('/book',require("./Available Books/AvailableBooks"));
app.use('/deleteRecord',require("./DeleteBook/delete"));
app.use('/updateRecord',require("./UpdateBook/update"));
app.use('/logout',require("./logout/logout"));
app.use('/upload',require("./addbook/image"));


app.listen(3000,function(){
    console.log("Server is running on PORT:3000")
})
