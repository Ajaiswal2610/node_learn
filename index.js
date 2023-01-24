
const express = require('express');
const dbconnect = require("./config");
dbconnect();
const Product = require('./products');
const app = express();
const multer = require('multer');

//  importing the mode
app.use(express.json());

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file, cb){
            cb(null, file.filename+"_"+Date.now()+".jpg")
        }
    })
}).single('user_file');



app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    console.log(data)
    console.log(req.body)
    let result = await data.save();
    resp.send(result);
});


app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})
// localhost:5000/search/?brand=Samsung&price=1600
// app.get('/search', async (req,resp)=>{
//     let data = await Product.find(req.query)
//     console.log(req.query)
//     resp.send(data)
// })
// localhost:5000/search/?brand=Samsung&price=1600

//  regex search for the matching 
app.get('/search/:key', async (req,resp)=>{
    let data = await Product.find(
        //  finding for the multiple field 
        {"$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"Categoy":{$regex:req.params.key}}
        ]
    }
    )
    resp.send(data)
})


app.delete("/delete/:_id",async (req,resp)=>{
    // resp.send(req.params)
    let data = await Product.deleteOne(req.params);
    //  req.params is iteself a dictionary {_id:uruourotiu}
    resp.send(data);

})

app.put("/update/:_id", async (req,resp)=>{
    let data = await Product.updateOne(
        req.params,
        {$set:req.body}
    );
    resp.send(data);
})

app.post("/upload", upload,(req, resp)=>{
    resp.send('File Upload')
})

app.listen(5000);



// connect to mongoose 

// const mongoose = require('mongoose');
// const connectdb = async ()=>{
//     try{
//         await mongoose.connect('mongodb://localhost:27017/ecomm');
//         console.log('db connected !!!!!')

//      }
//     catch (err){
//         console.log('failed to connect db',err)
//     }

// }
// const saveInDB = async()=>{
//     const Product = new mongoose.model('products',productSchema);
//     let data = new Product({
//         name:"m8",
//         price:43578,
//         brand:"Samsung",
//         Category:"Mobile"});

//     let result  = await data.save();
//     console.log(result);
// }

// // saveInDB();

// //  Update in Db
// const UpdateInDB = async()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.updateMany(
//         {name:"m8"},
//         {
//             $set:{ price : 8000, name:'m9'}
//         }
//     )
//     console.log(data);
// };
// // UpdateInDB();

// const DeleteInDb = async()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.deleteOne({name:'m9'})
//     console.log(data);

// }

// // DeleteInDb();

// const FindInDb = async ()=>{
//     const Product = mongoose.model('products',productSchema);
//     let data  = await Product.find({name:'m9'});
//     console.log(data)
// }
// FindInDb();
