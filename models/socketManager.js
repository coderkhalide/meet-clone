module.exports = (socket) => {
    try{
        console.log("Connected!")
        socket.on("code", (data, callback) => {
            socket.broadcast.emit("code", data)
        })
    }catch(e){
        console.log(e.message)
    }
}