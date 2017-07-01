// const MongoClient = require('mongodb').MongoClient;
// Same code as above but using ES6 destructuring.
// This allow us to pull off more things then just MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to database... yay');

    // db.collection('Todos').insertOne({
    //     text: 'Some text to be added here',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo ', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Twana Daniel',
        age: '26',
        location: 'Dublin Ireland',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});