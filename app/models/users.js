var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

User = db.Model.extend

