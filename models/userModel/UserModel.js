const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    }
},{versionKey: false})
const User = model('User', userSchema);

module.exports = User