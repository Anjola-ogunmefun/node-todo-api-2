//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
  return console.log('Unable to connect to MongoDB servers');
  }
console.log('connected to MongoDB server');
const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//   text:'Something to do',
//   completed: false
// },(err, result) => {
//   if(err) {
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//   name: 'Anjola',
//   country: 'Nigeria',
//   age: 22,
//   tribe: 'Yoruba'
// }, (err, result) => {
// if(err){return console.log('Unable to insert todo', err);
// }

console.log(result.ops);
});




  client.close();
});
