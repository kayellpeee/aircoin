var bitcoin = require('bitcoinjs-lib');

var createWallet = function(){
  var key = bitcoin.ECKey.makeRandom();
  
}

/*
  build out utility/helper functions here, export to server-config
*/



// Wallet.key
console.log(key.toWIF());

// Wallet.address
console.log(key.pub.getAddress().toString());