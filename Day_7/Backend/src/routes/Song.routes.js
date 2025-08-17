const express = require('express')
const multer = require("multer")
const uploadfile = require('../service/Storage.service')

const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})


router.post("/songs",upload.single("audio"),async(req,res)=>{
    console.log(req.body)
   
    const filedata = await uploadfile(req.file)
    console.log(filedata);
    
    res.status(201).json({
        message:"Song Created sucessfully",
        song:req.body
        
    })
    
})


module.exports = router