var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'Achilles',
    password: 'iu',
    database: 'aircoindb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/aircoin.sqlite')
  }
});

db.knex.schema.hasTable('users').then(function(exists){
  if( !exists ){
    db.knex.schema.createTable('users', function(user){
      user.increments('id');
      user.integer('phone').unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function(table){
      console.log('Created Table ', table);
    });
  }
});

db.knex.schema.hasTable('wallets').then(function(exists){
  if( !exists ){
    db.knex.schema.createTable('wallets', function(wallet){
      wallet.increments('id');
      wallet.string('address');
      wallet.string('key');
      wallet.timestamps();
    }).then(function(table){
      console.log('Created Table ', table);
    });
  }
});

modeule.exports = db;