var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');
var utilities = require('./utilities');

var phone = 6122327100;
var password = 'secretPhoneNuMber';

// utilities.createUser(phone, password);
// console.log(utilities.findUser(704, 'test'));

/*
new User({id: 1}).related('wallet').fetch().then(function(found){
  console.log('found user = ', found.attributes);
})
*/

// new User({phone: phone}).fetch().then(function(user){
//   console.log(user.attributes);
//   utilities.createWallet(user.attributes.id);
// })

new User({phone: phone}).fetch().then(function(user){
  var userid = user.attributes.id;
  utilities.deleteWallet(userid);
})

