const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://<userName>:<user_Password>@cluster0.stexsav.mongodb.net/<coonection_folder_name>").then(()=>{
        console.log("connected to DB");
        
    })
}

module.exports = connectToDb

//We didn’t call it here because we need to keep the code readable, which is a normal practice, and the function needs to be written here — but we call it in server.js.



