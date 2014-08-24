var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var Wallet = db.Model.extend({
  tableName: 'wallets',
  hasTimestamps: true,
  user: function(){
    return this.belongsTo(User)
  },

/*
  initialize: function(){
    this.on('creating', this.encryptProperties);
  },

  encryptProperties: function(){
    this.encryptAddress(this.get('address'));
    this.encryptKey(this.get('key'));
  },

  encryptAddress: function(address){

  },

  encryptKey: function(key){

  }
*/

});
