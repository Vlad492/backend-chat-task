const exp = new RegExp('.@[a-z]') 

module.exports = function(email){
    return exp.test(email)
}