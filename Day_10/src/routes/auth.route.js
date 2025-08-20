const express = require("express")
const usermodel = require('../models/user.model')
const jwt  = require("jsonwebtoken")



const router = express.Router()

router.post('/register',async(req,res)=>{
    const {username , password} = req.body

    const user = await usermodel.create({
        username,password
    })

    const token = jwt.sign({
        id:user._id,
        name:user.username
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registed sucessfully",
        user,
        
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

router.get('/user',async(req,res)=>{
    const {token} = req.cookies
    console.log(token);
    
    
    if(!token){
        return res.status(401).json({
            message:"unauthorised"
        })
    }

    try{
        
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const user = await usermodel.findOne({
            _id:decode.id
        }).select("-password -__v")
        res.status(200).json({

            message:"user data fatch",
            user
        })
    
        res.send(decode)
    }
    catch(err){
        return res.status(401).json({
            message:"unothorized-invalid token"
        })
    }
    
})




module.exports = router