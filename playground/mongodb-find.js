// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

   var db = client.db('TodoApp');

// db.collection('Todos').find({
//   _id: new ObjectID('5b5d98801ac486759d45af50')
// }).toArray().then((docs) => {
//   console.log(docs);
//   console.log(JSON.stringify(docs,undefined, 2));
//
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })


// db.collection('Todos').find().count().then((count) => {
//    console.log(`Todos count: ${count}`);
//
//
//  }, (err) => {
//   console.log('Unable to fetch todos', err);
//  })

db.collection('Users').find({name: 'Aakash'}).toArray().then((user) => {
  console.log('Users: ');
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log('Unable to fetch users', err);
})





//  client.close();

});
