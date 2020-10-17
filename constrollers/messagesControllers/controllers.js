const Message = require('../../models/messageModel/MessageModel')
const User = require('../usersControllers/controllers')
const validateEmail = require('../../validators/emailValidator')
const validateMessage = require('../../validators/messageValidator')

class Messages {
    static async messageListNumber(req, res) {
        try {
            let messages = await Message.find({}).limit(10 * (req.params.number+1))//get first 10* number messages
            if (messages.length > 10) {//if length > 10  ---> return last 10 messages
                console.log(messages)
                console.log(messages.length)
                messages = messages.slice(messages.length - 10)
                console.log(messages)
            }
            res.status(200).json(messages)
        } catch (e) {
            res.status(500).json({ err: "Server error" })
        }
    }
    static async messageSingleId(req, res) {
        try {
            let message = await Message.findById(req.params.id)
            res.status(200).json(message)
        } catch (e) {
            res.status(404).json({ err: "Message not found" })
        }
    }
    static async messageCreate(req, res) {
        try {
            if (validateEmail(req.body.email)) {
                if (validateMessage(req.body.text)) {
                    let user = await User.find(req.body.email)//check user in users collection by email
                    if (user) {//if user exist add field name to body
                        req.body.name = user
                    }
                    let message = await Message.create(req.body)//create new message
                    await message.save()
                    res.sendStatus(201)
                } else {
                    res.status(404).json({ err: 'Invalid text' })
                }
            } else {
                res.status(404).json({ err: 'Invalid email' })
            }


        } catch (e) {
            res.status(500).json({ err: 'Server Error' })
        }
    }
    static async messageAddToDbBySocket(msg) {//add messages created by socket connection
        try {
            let message = await Message.create(msg)//add message to db
            message.save()
            return message //return message
        } catch (e) {
            return false
        }
    }
    static async messageUpdate(req, res) {
        try {
            let message = await Message.findByIdAndUpdate(req.body.id, { updatedAt: new Date, text: req.body.text })//find message by id and update it 
            if (message) {//if message found
                res.sendStatus(201)
            } else {//message not found
                res.status(404).json({err: 'Message not found' })
            }
        } catch (e) {
            res.status(500).json({ err: 'Server error' })
        }

    }
}

module.exports = Messages







