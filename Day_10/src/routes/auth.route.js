const express = require("express")
const usermodel = require('../models/user.model')

const router = express.Router()

router.post('/register',async(req,res)=>{
    const {username , password} = req.body

    const user = await usermodel.create({
        username,password
    })
    res.status(201).json({
        message:"user registed sucessfully",
        user
    })


})

router.post('/login',async(req,res)=>{
    const {username , password} = req.body

    const isUser = await usermodel.findOne({
        username:username
    })

    if(!isUser){
        return res.status(401).json({
            message:"Invalid username"
        })
    }
    const isPassowrdValid = password === isUser.password
    
    if(!isPassowrdValid){
        return res.status(401).json({
            message:"Password is invalid"
        })
    }

    res.status(200).json({
        message:"user login successfully"
    })
})

router.get('/set',async(req,res)=>{
    
    const user = await usermodel.find()
    res.status(201).json({
        message:"Fetch data sucessfully",
        user
    })
})


module.exports = router