const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("connect to db");
        
    })
}

module.exports = connectToDb