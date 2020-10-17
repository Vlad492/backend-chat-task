const User = require('../../models/userModel/UserModel')
const validateEmail = require('../validators/emailValidator')

class Users{
    static async create(req,res){
        if (validateEmail(req.body.email)) {
        try{
            await User.create(req.body)//create a new user
            res.status(201).json({added: true})
        }catch(e){
            console.log(e)
            res.status(403).json({added : false, msg : 'Something get wrong'})
        }}
        else{
            res.status(403).json({added : false, msg : 'Invalid email'})
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
            console.log(e)
        }
    }
}

module.exports = Users

