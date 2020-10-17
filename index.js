const express = require('express')
const app = express()
require('dotenv').config()
const http = require('http').createServer(app)
const port = process.env.PORT
const mongoose = require('mongoose')
const router = require('./router/index')
const io = require('socket.io')(http);
const Message = require('./models/messageModel/MessageModel')




const start = async () => {//Start server and connect to MongoDB
    http.listen(port, console.log(`Server has been started on ${port} port`))
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => console.log("MongoDB has been connected"))
}

app.get('/api/messages/list/:number', router)//get messages
app.get('/api/messages/single/:id', router)//get message By id
app.post('/api/messages/create', router)//create message
app.put('/api/messages/update', router)//update message by id
app.post('/api/users/create', router)//create user





//this code works when you connect your web-page to socket.io API  
io.on('connection', socket => {//triggers when user connect on client 
    socket.on('messageFromClient', async (msgObj) => {//receive user message with msgObj.email and msgObj.text fields 
        msgObj = await Message.messageAddToDbBySocket(msgObj)//add message to db and add new fields
        if (msgObj) {
            socket.emit('messageToClient', msgObj)//send message to users
        }

    });
});




























start()