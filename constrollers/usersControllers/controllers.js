const User = require('../../models/userModel/UserModel')
const validateEmail = require('../../validators/emailValidator')

class Users{
    static async create(req,res){
        if (validateEmail(req.body.email)) {
        try{
            await User.create(req.body)
            res.sendStatus(201)
        }catch(e){
            console.log(e)
            res.status(500).json({ err : 'Server Eror'})
        }}
        else{
            res.status(403).json({ err : 'Invalid email'})
        }
    }
    static async find(email){
        try{
           let user = await User.findOne({email})//find user my email
           if(user){
               return user.name
           }else{
               return false
           }
        }catch(e){
            return false
        }
    }
}

module.exports = Users

