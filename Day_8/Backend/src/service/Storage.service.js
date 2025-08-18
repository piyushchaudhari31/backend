
var ImageKit = require("imagekit");
// var mongoose = require("mongoose")

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadfile(file){
    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:"Bewajah", //--> also write here mongoose.types.objectId().toString which give to name randomly by id
            folder:"timepass"
        },(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports = uploadfile