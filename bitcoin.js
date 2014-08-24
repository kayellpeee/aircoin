var bitcoin = require('bitcoinjs-lib');



var createWallet = function(){
  var key = bitcoin.ECKey.makeRandom();
  
  
}

console.log(key.toWIF());

console.log(key.pub.getAddress().toString());