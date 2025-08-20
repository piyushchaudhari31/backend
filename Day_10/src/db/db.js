const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Connected to DB")).catch((error)=>console.log(error))
}

module.exports = connectToDb