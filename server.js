const express = require('express')
const app = express()
const cors = require('cors')
const socketManager = require('./models/socketManager')
const http = require('http')
const server = http.createServer(app)


app.use(cors())
require('dotenv').config()
require('./config/routes')(app)

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
})

io.on('connection', socketManager)

const port = process.env.PORT || 4000
server.listen(port, () => console.log("Listening on port " + port))