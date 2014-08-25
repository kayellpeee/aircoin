var bitcoin = require('bitcoinjs-lib');

var db = require('./app/config');
var User = require('./app/models/user');
var Wallet = require('./app/models/wallet');
var Users = require('./app/collections/users');
var Wallets = require('./app/collections/wallets');

exports.findUser = function(phone, password){

  new User({phone: phone}).fetch().then(function(found){
    if( found ){

      // check if right password
      var match = found.comparePassword(password, function(match){
        if( match ){
          exports.findWallet(found.attributes.id);
        }else{
          console.log('PW do not match')
        }
      });

    }else{
      exports.createUser(phone, password);
    }
  });

}

exports.findWallet = function(user_id){

  // queries db for wallet related to given user
  new User({id: user_id}).related('wallet').fetch()
    .then(function(found){
      if( found ){
        exports.logWallet(found.attributes);
      }else{
        exports.createWallet(user_id);
      }
    });

}

exports.createUser = function(phone, password){

  var user = new User({
    phone: phone,
    password: password
  });
  
  user.save().then(function(user){
    Users.add(user);                                  // <<<< necessary? no reconcile diff (new vs no new)
    exports.createWallet(user.attributes.id);
  });

}

exports.logWallet = function(walletAttributes){

  var address = wallet.address;
  var key = wallet.key;
  console.log('found wallet key: ', key, "  ***address***  ", address);

}

exports.createWallet = function(user_id){

  var btcWallet = bitcoin.ECKey.makeRandom();
  var wallet = {
    address: btcWallet.pub.getAddress().toString(),
    key: btcWallet.toWIF(),
    user_id: user_id
  }

  new Wallet(wallet).save().then(function(savedWallet){
                                                                  // <<<<< missing something? no reconcile diff (new vs no new)
    exports.logWallet(savedWallet.attributes);
  });

}

exports.deleteWallet = function(user_id){

  new Wallets({user_id: user_id}).fetch().then(function(wallet){
    if( wallet ){
      wallet.destroy()
      console.log("deleted wallet associated with " + user_id);
    }else{
      console.log('no wallet associated with ' + user_id + '. text "get  wallet + password" to create one');
    }

  });

}