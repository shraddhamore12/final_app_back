const express=require("express")
const bodyParser = require("body-parser")

const productRouter=require("./product")
//var cat=require("./category");

const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(productRouter)
app.get('/',(req,res)=>{
    res.send(`<h1 style="color:red">Welcome to final app</h1>`)
})
app.listen(4300, function(){
    console.log("Server Started on port  " + 4300 );
})