const Message = require('../../models/messageModel/MessageModel')
const User = require('../usersControllers/controllers')
const validateEmail = require('../../validators/emailValidator')
const validateMessage = require('../../validators/messageValidator')

class Messages {
    static async messageListNumber(req, res) {
        try {
            let messages = await Message.find({}).limit(10 * req.params.number+1)//get first 10* number messages
            if (messages.length > 10) {//if length > 10  ---> return last 10 messages
                messages = messages.slice(0, messages.length - 10)
            }
            res.status(200).json(messages)
        } catch (e) {
            res.status(404).json({ msg: "Something went wrong" })
        }
    }
    static async messageSingleId(req, res) {
        try {
            let message = await Message.findById(req.params.id)//find message by id
            res.status(201).json(message)
        } catch (e) {
            console.log(e)
            res.status(404).json({ found: false })
        }
    }
    static async messageCreate(req, res) {
        console.log(validateEmail(req.body.email))
        try {
            if (validateEmail(req.body.email)) {
                if (validateMessage(req.body.text)) {
                    let user = await User.find(req.body.email)//check user in users collection by email
                    if (user) {//if user exist add field name to body
                        req.body.name = user
                    }
                    let message = await Message.create(req.body)//create new message
                    await message.save()
                    res.status(201).json({ added: true })
                } else {
                    res.json({ added: false, msg: 'invalid text' })
                }
            } else {
                res.json({ added: false, msg: 'invalid email' })
            }


        } catch (e) {
            console.log(e)
            res.json({ added: false, msg: 'something went wrong' })
        }
    }
    static async messageAddToDbBySocket(msg) {//add messages created by socket connection
        try {
            let message = await Message.create(msg)//add message to db
            message.save()
            return message //return message
        } catch (e) {
            console.log(e)
            return false
        }
    }
    static async messageUpdate(req, res) {
        console.log(req.body)
        try {
            let message = await Message.findByIdAndUpdate(req.body.id, { updatedAt: new Date, text: req.body.text })//find message by id and update it 
            if (message) {//if message found
                res.status(201).json({ updated: true })
            } else {//message not found
                res.status(404).json({ updated: false, msg: 'Message not found' })
            }
        } catch (e) {
            res.status(404).json({ updated: false, msg: 'Something went wrong' })
        }

    }
}

module.exports = Messages







