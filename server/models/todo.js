var mongoose = require('mongoose');

// Create a database model schema, the schema is validated with required text and ser defaults of completed and completedAt.
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// Create a todo
// var newTodo = new Todo({
//     text: 'Drink more water!!!',
// });

// Save the ToDoo - save returns a promise so we can chain up a promise and we add few call backs when data is saved.
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

module.exports = {Todo};