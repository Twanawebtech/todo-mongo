// const MongoClient = require('mongodb').MongoClient;
// Same code as above but using ES6 destructuring.
// This allow us to pull off more things then just MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5957c5dc191e38e720510c55')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // })

    db.collection('Users').find({Name: 'Twana Daniel'}).count().then((count) => {
        console.log(`Total Todos: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    db.collection('Users').find({Name: 'Twana Daniel'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    })

    //db.close();
});