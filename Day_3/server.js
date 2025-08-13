
const express = require('express');
const app = express()

app.use(express.json())  //->body se data chahiye to iska use karna hi padata hai..

//notes => title and description.

let notes=[]

app.post('/notes',(req ,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message:"notes added successfully",
        notes:notes
    })
})


app.listen(3000 , ()=>{
    console.log("server is started");
    
})
