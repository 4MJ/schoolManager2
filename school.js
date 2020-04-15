
exports.isFeeCompleted = function(amountPaid){
    var fee = 1000000;
    if(amountPaid == fee){
        return true;
    }else {
        return false;
    }
}
exports.totalFee = function (){
    return 1000000;
}