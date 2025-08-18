const express = require('express')
const multer = require("multer")
const uploadfile = require('../service/Storage.service')
const songModel = require('../models/song.model')

const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})


router.post("/songs",upload.single("audio"),async(req,res)=>{
    
   
    const filedata = await uploadfile(req.file)
    
    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:filedata.url,
        mood:req.body.mood
    })
    
    res.status(201).json({
        message:"Song Created sucessfully",
        song:song
        
    })
    
})

router.get("/songs",async(req,res)=>{
    const {mood} = req.query;
    
    const song = await songModel.find({
        mood:mood
    })

    res.status(200).json({
        message:"song fetch successfully",
        song
    })
})


module.exports = router