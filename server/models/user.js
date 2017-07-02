var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// Create a user
// var newUser = new User({
//     email: 'twanawebtech@gmail.   ',
// });
//
// newUser.save().then((user) => {
//     console.log('Saved user ', user);
// }, (err) => {
//     console.log('Unable to save todo ', err);
// });


module.exports = {User};