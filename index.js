// const express = require('express')
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();
// route.use(reqFilter)
// // ---------------------------Middleware 

// // app.use(reqFilter);
// //  this applies middleware on whole app


// app.get('/',(req,resp)=>{
//     resp.send('Welcome to home');
// });

// route.get('/users',(req,resp)=>{
//     resp.send('User page')
// });
// //  route will be applied for the middleware 

// app.get('/about',(req,resp)=>{
//     resp.send('This is about page')
// });

// route.get('/contact', (req,resp)=>{
//     resp.send('This is contact route')
// })

// app.use('/',route);


// app.listen(7000);


// ----------------------------------------Mongo client connenctions ------------------
// const {MongoClient} = require('mongodb');
// // or 
// // const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database  = 'ecomm'
// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products')
//     let response = await collection.find().toArray()
//     console.log(response);
// }
// getData();


// --------------------------------- MongoDB data CRUD nodejs---------------------------------------------


// dbConnection().then((response)=>{
//     response.find({brand:'Sony'}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })

const dbConnection  = require('./mongodb')

//  ------------------------------------ Read file --------------------------------------
const main = async ()=>{
    let data = await dbConnection('products');
    data = await data.find().toArray();
    console.log(data)

}
main();
// console.log(dbConnection()) Its a promise
// dbConnection();



