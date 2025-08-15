const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:String,
    content:String
})

const notModel = mongoose.model("note",noteSchema)
 
// Model CRUD operation ke liye use hota hai jise kam line of code likh sakte hai.

module.exports = notModel