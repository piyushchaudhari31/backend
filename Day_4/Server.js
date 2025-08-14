const express = require("express")
const connectToDb = require('./src/db/db')

connectToDb()
const app = express()
app.use(express.json())

app.get("/home",(req,res)=>{
    res.send("hello world")
})

app.post('/note',(req,res)=>{
    const {title,content} = req.body
    console.log(title,content)

})

app.listen(3000,()=>{
    console.log("Server is running...");
    
})