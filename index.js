const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT
const format = require("date-format");
const req = require('express/lib/request');
const { json } = require('express/lib/response');

app.get("/",(req , res) => {

    res.status(201).send("<h1>Hello World</h1>")
})

app.get("/api/v1/instagram",(req,res)=>{
    const instagram = {
        "username":"Vatsaly Rai @instagram",
        "Followers": 78,
        "Follows": 56,
        "Time": format(new Date())
    }

    res.status(200).json(instagram)
})

app.get("/api/v1/facebook",(req,res)=>{
    const facebook = {
        "username":"Vatsaly Rai @facebook",
        "Followers": 48,
        "Follows": 36,
        "Time": format('hh:mm:ss.SSS',new Date())
    }

    res.status(200).json(facebook)
})


app.get("/api/v1/linkedin",(req,res)=>{
    const linkedin = {
        "username":"Vatsaly Rai @linkedin",
        "Followers": 35,
        "Follows": 86,
        "Time": format('dd-MM-yy -> hh:mm:ss',new Date())
    }

    res.status(200).json(linkedin)
})

app.get("/api/v1/:token",(req,res)=>{

   // console.log(req.params.token)
    
    res.status(200).json({"params" : req.params.token});
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})