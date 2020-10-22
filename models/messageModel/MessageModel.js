const {model, Schema} = require('mongoose');

const messageSchema = new Schema({
    name: {
        type : String,
        default : "Unautorized user"
    },
    email: {
        type : String,
        required : true
    },
    text: {
        type : String,
        required : true
    },
    createdAt : {
        type: Date,
        default : new Date()
    } ,
    updatedAt : {
        type : Date,
        default : new Date()
    }
},{versionKey: false});
const Message = model('Message', messageSchema);

module.exports = Message;