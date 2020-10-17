const exp = new RegExp('^[a-z0-9]+@[a-z0-9]+\.+[a-z0-9]+$') 

module.exports = function(email){
    return exp.test(email)
}