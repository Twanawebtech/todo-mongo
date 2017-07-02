// const MongoClient = require('mongodb').MongoClient;
// Same code as above but using ES6 destructuring.
// This allow us to pull off more things then just MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to database');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Twana Daniel'}).then((result) =>{
    //      console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Going to the gym'}).then((result) =>{
    //     console.log(result);
    // });

    // FineOneAndDelete - This is best, get the document back and delete it.
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5957c8ac44ebbde79e4fb070')
    // }).then((result) =>{
    //     console.log(result);
    // });



    //db.close();
});