var db = require('../config.js');
var Wallet = require('../models/wallet');

var Wallets = new db.Collection();

Wallets.model = Wallet;

module.exports = Wallets;
