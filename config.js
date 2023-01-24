const mongoose = require('mongoose');

const connectdb = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/ecomm');
        console.log('db connected !!!!!')

     }
    catch (err){
        console.log('failed to connect db',err)
    }

}

module.exports = connectdb;


