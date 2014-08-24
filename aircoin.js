var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

var phone = 6122327100;
var password = 'myPhoneNumber';

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


var address = 'SomeWalletAddress123';
var key = 'relatedPrivateKey123';


new Wallet({address: address}).fetch().then(function(found){
  if( !found ){
    var wallet = new Wallet({
      address: address,
      key: key,
      user_id: 1
    }).save().then(function(wallet){
      Wallets.add(wallet);
      console.log('added wallet = ', wallet);
    });
  }else{
    console.log('found wallet - ', found.attributes);
  }

});
*/

new User({id: 1}).related('wallet').fetch().then(function(found){
  console.log('found user = ', found);
})

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