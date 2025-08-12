const express = require('express')

const server =express()

server.get("/home",(req,res)=>{
    res.send("welcome to home page")
})

server.get("/about",(req ,res)=>{
    res.send("welcome to about wala page")
})


server.listen(3000,()=>{
    console.log("Server is started");
    
})