const exp = new RegExp("^.{1,100}$") 

module.exports = function(msg){
    return exp.test(msg)
}