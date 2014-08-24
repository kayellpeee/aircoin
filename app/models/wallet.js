var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = require('./user');

var Wallet = db.Model.extend({
  tableName: 'wallets',
  hasTimestamps: true,
  user: function(){
    return this.belongsTo(User, 'user_id');
  },
});

module.exports = Wallet;