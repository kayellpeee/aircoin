var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

exports.findUser = function(phone, password){

  new User({phone: phone}).fetch().then(function(found){
    if( found ){
      // has attributes: phone, password, updated_at, created_at and id
      return found.attributes;
    }else{
      createUser(phone, password);
    }
  });
  
}

exports.findWallet = function(user_id){

}

exports.createUser = function(phone, password){

}

exports.createWallet = function(user_id){

}

exports.deleteWallet = function(user_id){

}