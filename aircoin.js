var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

new User({phone: phone}).fetch().then(function(found){
  if( !found ){
    var user = new User({
      phone:  phone,
      password: password
    }).save().then(function(user){
      Users.add(user);
      console.log('Saved new user - ', user);
    });
  }else{
    console.log(found.attributes);
  }
});

var createWallet = function(){
  var key = bitcoin.ECKey.makeRandom();
  
}

/*
  build out utility/helper functions here, export to server-config
*/





// Wallet.key
// console.log(key.toWIF());

// Wallet.address
// console.log(key.pub.getAddress().toString());