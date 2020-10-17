const router = require('express').Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
const Messages = require('../constrollers/messagesControllers/controllers')
const Users = require('../constrollers/usersControllers/controllers')



router.get('/api/messages/list/:number', Messages.messageListNumber)//get messages
router.get('/api/messages/single/:id', Messages.messageSingleId)//get message by id
router.post('/api/messages/create', Messages.messageCreate)//create message
router.put('/api/messages/update', Messages.messageUpdate)//update message
router.post('/api/users/create', Users.create)//create a new user




module.exports = router