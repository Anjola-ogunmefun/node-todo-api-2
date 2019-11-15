//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
  return console.log('Unable to connect to MongoDB servers');
  }
console.log('connected to MongoDB server');
const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5db353b3deb6cb19cc6f9f54')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({age: 22}
  ).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  })



  //client.close();
});
