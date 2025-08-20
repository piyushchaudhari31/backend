const express = require("express")
const connectToDb = require('./db/db')
const authroutes = require('./routes/auth.route')
const cookieparser = require('cookie-parser')

connectToDb()
const app = express()
app.use(express.json())
app.use(cookieparser())
app.use('/auth',authroutes)



module.exports = app