var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  wallet: function(){
    return this.hasOne(Wallet);
  }

/*
  initialize: function(){
    this.on('creating', this.hashAndEncrypt);
  },

  hashAndEncrypt: function(){
    this.hashPassword(this.get('password');
    this.encryptPhone(this.get('phone'));
  },

  // build out hashing functionality (w/ promises)
  hashPassword: function(password){

  }
  encryptPhone: function(phone){

  }
*/

})

module.exports = User;