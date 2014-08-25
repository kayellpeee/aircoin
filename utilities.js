var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

exports.findUser = function(phone, password){

  new User({phone: phone}).fetch().then(function(found){
    if( found ){
      console.log('checking for PW match');
      var match = found.comparePassword(password)
      if( match ){
        // has attributes: phone, password, updated_at, created_at and id
        console.log('found a user');
        return found.attributes;
      }else{
        console.log('PW do not match')
      }
    }else{
      // will i have to wrap in promise?
      console.log('creating a user');
      return createUser(phone, password);
    }
  });

}

exports.findWallet = function(user_id){

  // queries db for wallet related to given user
  new User({id: user_id}).related('wallet').fetch()
    .then(function(found){
      if( found ){
        return found.attributes;
      }else{
        return createWallet(user_id);
      }
    });

}

exports.createUser = function(phone, password){

  var user = new User({
    phone: phone,
    password: password
  });
  
  user.save().then(function(user){
    Users.add(user);
    return user.attributes;
  });

}

exports.createWallet = function(user_id){

  var btcWallet = bitcoin.ECKey.makeRandom();
  var wallet = {
    address: btcWallet.pub.getAddress().toString(),
    key: btcWallet.toWIF(),
    user_id: user_id
  }

  new Wallet(wallet).save().then(function(savedWallet){
    return savedWallet.attributes;
  });

}

exports.deleteWallet = function(user_id){

  new Wallets({user_id: user_id}).destroy()
    .then(function(){
      new User({id: user_id}).fetch()
        .then(function(user){
          return "deleted wallet associated with " + user.attributes.phone;
        });
    });

}