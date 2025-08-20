const express = require("express")
const connectToDb = require('./db/db')
const authroutes = require('./routes/auth.route')

connectToDb()
const app = express()
app.use(express.json())
app.use('/auth',authroutes)


module.exports = app