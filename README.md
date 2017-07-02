# Node With MongoDB - Toolbox 
Toolbox for using MongoDB with Node.JS

### MongoDB Main Docs 
MongoDB has many drivers like MongoDB native driver.
The method for MongoDB can used by all drivers like Mongoose and MongoDB native driver. 
Docs: https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc

### MongoDB Native Driver 
MongoDB driver is used for connecting to the database and doing all usual methods, all which are inside the /playground folder. 
Docs: http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html#count

### Mongoose Library
Mongoose is more powerful, allow us to create schemas and more easy way to work with MongoDB. 
Mongoose is better to use over MongoDB Native Driver 
Docs: http://mongoosejs.com/docs/guide.html
- Mongoose support callbacks by default but I prefer using Promises given that promises is used in all the examples. 
- Mongoose allow for creating models/Schema of the database where MongoDB native driver don't have that. 
- Mongoose also do casting between numbers and strings 

### Promises
Use promises where possible over call backs. 
Promises are a lot easier to chain and manage compare to call backs. 




