const {MongoClient} = require('mongodb');
// or 
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database  = 'ecomm'
async function dbConnection(collection_name){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection(collection_name)
    return collection
}

module.exports = dbConnection;