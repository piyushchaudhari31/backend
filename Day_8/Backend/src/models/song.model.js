const mongoose = require("mongoose")

const Songschema = new mongoose.Schema({
    title:String,
    artist:String,
    audio:String,
    mood:String
})

const songModel = mongoose.model("song",Songschema)

module.exports= songModel