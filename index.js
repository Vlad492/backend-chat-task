const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./router/index')


const start = async () => {//Start server and connect to MongoDB
    app.listen(process.env.PORT, console.log(`Server has been started on ${process.env.PORT} port`))
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => console.log("MongoDB has been connected"))
}

app.get('/api/messages/list/:number', router)//get messages
app.get('/api/messages/single/:id', router)//get message By id
app.post('/api/messages/create', router)//create message
app.put('/api/messages/update', router)//update message by id
app.post('/api/users/create', router)//create user

































start()