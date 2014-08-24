var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var Wallet = require('./wallet');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  wallet: function(){
    return this.hasOne(Wallet);
  },

  initialize: function(){
    this.on('creating', this.hashPassword);
  },

  // hashAndEncrypt: function(){
  //   this.hashPassword();
  //   this.encryptPhone();
  // },

  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher( this.get('password'), null, null ).bind(this)
      .then(function(hash){
        console.log('hash ******  ', hash);
        this.set('password', hash);
      });
  }

  // encryptPhone: function(phone){
    // encrypt phone number before saving (is even necessary?)
  // }

})

module.exports = User;