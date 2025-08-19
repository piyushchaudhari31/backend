const express = require('express')

const router = express.Router()

router.use((req,res,next)=>{
    console.log("this middleware routes and api");
    next()
    
})

router.get("/",(req,res)=>{
    res.json({
        message:"welcome to the web"
    })
})


module.exports = router