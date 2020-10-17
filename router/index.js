const router =require('express').Router()
const messageRouter = require('./api/messages/messageRouter')
const usersRouter = require('./api/users/usersRouter')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))




router.get('/api/messages/list/:number', messageRouter)//get messages
router.get('/api/messages/single/:id', messageRouter)//get message by id
router.post('/api/messages/create', messageRouter)//create message
router.put('/api/messages/update', messageRouter)//update message
router.post('/api/users/create', usersRouter)//create a new user



module.exports = router