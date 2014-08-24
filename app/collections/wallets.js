var db = require('../config.js');
var Wallet = require('../models/wallet.js');

var Wallets = new db.Collection();

Wallets.model = Wallet;

module.exports = Wallets;
