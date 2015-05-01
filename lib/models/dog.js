'use strict';

//building a mongoose model

//this allows us to build a model with mongoose
var Mongoose = require('mongoose');

//first build a schema
var dogSchema = Mongoose.Schema({
  //required needs to be filled before writing to DB
  name: {type: String, required: true},
  age: {type: Number, required: true},
  sex: {type: String, required: true},
  //we will use a URL so still string
  photo: {type: String}
});


//build a model from this schema

//takes two arguments, name of model and the schema
var Dog = Mongoose.model('Dog', dogSchema);

//export out of the module
//use this notation when exporting one item
module.exports = Dog;
