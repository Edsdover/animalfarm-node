'use strict';

//deletes one dog

//requirements are best practice at the top
var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/dogs/{dogId}',
    config: {
      description: 'Delete a single dog',
      handler: function(request, reply){
        //findByIdAndRemove removes one object
        Dog.findByIdAndRemove(request.params.dogId, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.destroy'
};