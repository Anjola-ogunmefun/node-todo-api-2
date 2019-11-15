//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
  return console.log('Unable to connect to MongoDB servers');
  }
console.log('connected to MongoDB server');
const db = client.db('TodoApp')

// db.collection('Users').deleteMany({name: 'Anjola'}).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5dcdb06768022ed6070fa1a2')
}).then((result) => {
  console.log(result);
})

  //client.close();
});
