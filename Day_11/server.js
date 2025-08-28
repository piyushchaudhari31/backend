const app = require("./src/app");
const {createServer} = require('http')
const {server} = require('socket.io')

const httpServer = createServer(app)
const io = require("socket.io")(httpServer);

io.on("connection", socket => { 
    /* ... */ 
});

httpServer.listen(3000, ()=>{
    console.log("server is running..");
    
})