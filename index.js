'use strict';

//Step one:
//Start with building a mongoose model schema dog.js
//------------------------------------------
//create the controller in plugins create.js
//------------------------------------------
//create a GET route for the DB data index.js
//------------------------------------------
//create a GET route for a single DB data request show.js
//------------------------------------------
//create a PUT route for editing a single DB data object update.js
//------------------------------------------
//create a DELETE route for removing a single DB data object destroy.js
//------------------------------------------




var Hoek = require('hoek');
var Server = require('./lib/server');

Server.init(process.env.PORT, function(err, server){
  Hoek.assert(!err, err);
  console.log('Hapi:', server.info.uri);
  console.log('Mongo:', process.env.MONGO_URL);
});
