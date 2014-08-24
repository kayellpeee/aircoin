var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

/*
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

*/

var address = '11255';
var key = 'test2';

new Wallet({address: address}).fetch().then(function(found){
  if( !found ){
    var wallet = new Wallet({
      address: address,
      key: key
    }).save().then(function(wallet){
      Wallets.add(wallet);
      console.log('added wallet = ', wallet);
    });
  }else{
    console.log('found wallet - ', found.attributes);
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