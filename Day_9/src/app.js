const express = require("express")
const indexRoutes = require('../src/routes/index.routes')


const app =express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log("this middleware is between app and route")
    next()                                                  //--> If i don't write next() ,so request can't go on indexRoutes
})
app.use('/',indexRoutes)

module.exports = app