var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // use the builtin promise for Mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp'); // connect to the database

module.exports = {mongoose};