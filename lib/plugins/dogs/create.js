'use strict';

//requirements are best practice at the top
var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/dogs',
    config: {
      description: 'Creates a dog',
      handler: function(request, reply){
        var dog = new Dog(request.payload);
        dog.save(function(){
          if(dog.errors){
            //when doing an http request from angular 400 will err the promis
            //.then will not happen with code 400
            return reply(dog.errors).code(400);
          }else{
            //dog has finished saving
            //then returns object
            return reply(dog);
          }
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.create'
};
