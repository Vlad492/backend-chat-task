const exp = new RegExp("^.{1,1000}$") 

module.exports = function(msg){
    return exp.test(msg)
}