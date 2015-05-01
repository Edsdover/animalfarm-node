'use strict';

//updates one dog

//requirements are best practice at the top
var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/dogs/{dogId}',
    config: {
      description: 'Edits a single dog',
      handler: function(request, reply){
        //findByIdAndUpdate updates one object
        Dog.findByIdAndUpdate(request.params.dogId, request.payload, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.update'
};
