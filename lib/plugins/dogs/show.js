'use strict';

//shows one dog

//requirements are best practice at the top
var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/dogs/{dogId}',
    config: {
      description: 'Get a single dog',
      handler: function(request, reply){
        //findById returns one object
        Dog.findById(request.params.dogId, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.show'
};
