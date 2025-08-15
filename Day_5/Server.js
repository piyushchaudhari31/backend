const express = require("express")
const connectToDb = require('./src/db/db')
const notModel = require('./src/models/note.model')



connectToDb()

const app = express()
app.use(express.json())

app.post("/notes",async(req,res)=>{
    const {title,content} = req.body
    console.log(title,content)
    await notModel.create({
        title,content
    })

    res.json({
        message:"Note created Sucessfully"
    })
})

app.get("/notes",async(req,res)=>{
    const notes =await notModel.find()

    res.json({
        message:"Notes fetch sucessfully",
        notes
    })
})

app.delete("/notes/:_id",async(req , res)=>{
    
    
    const notId = req.params._id
    await notModel.findByIdAndDelete({
        _id:notId
    })

    res.json({
        message:"Note Deleted.."
    })
})

app.patch("/notes/:_id",async(req,res)=>{
    
    const notId = req.params._id

    const {title} = req.body

    await notModel.findOneAndUpdate({
        _id:notId
    },{
        title:title
    })


    res.json({
        message:"note updated successfully"
    })
})

app.listen(3000 , ()=>{
    console.log("server is running...");
    
})