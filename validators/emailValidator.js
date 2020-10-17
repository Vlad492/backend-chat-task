const exp = new RegExp('.@.') 

module.exports = function(email){
    return exp.test(email)
}