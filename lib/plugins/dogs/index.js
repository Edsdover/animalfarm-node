'use strict';

//requirements are best practice at the top
var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/dogs',
    config: {
      description: 'Get all dogs',
      handler: function(request, reply){
        //find all the dogs
        //.find is async, takes an err and all dogs found
        //.find always returns array
        Dog.find(function(err, dogs){
          //never send back an array, send an object
          return reply({dogs:dogs});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.index'
};
