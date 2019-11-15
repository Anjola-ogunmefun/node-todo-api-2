//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
  return console.log('Unable to connect to MongoDB servers');
  }
console.log('connected to MongoDB server');
const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5dcdbef268022ed6070fa6c8")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5dcdb09868022ed6070fa1b4")
},{
  $set: {
    name: 'Anjola'
  },
  $inc:{age: 2}
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  //client.close();
});
