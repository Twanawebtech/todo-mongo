// const MongoClient = require('mongodb').MongoClient;
// Same code as above but using ES6 destructuring.
// This allow us to pull off more things then just MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to MongoDB server');

    // FineOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5957c681b9244fe73b83d918')
    }, {
        $set: {
            name: 'Twana Daniel',
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });



    //db.close();
});