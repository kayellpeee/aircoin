var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  // define relationship with wallets here
  // this has one Wallet (wallet_id)

  initialize: function(){
    this.on('creating', this.hashProperties);
  },

  hashProperties: function(){
    this.hashPassword(this.get('password');
    this.hashPhone(this.get('phone'));
  },

  // build out hashing functionality (w/ promises)
  hashPassword:
  hashPhone: 
})