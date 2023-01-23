const dbConnection = require('./mongodb')

const insert_one = async ()=>{
    let data = await dbConnection('products');
    data = await data.insert(
        {
            name:'note 5',
            brand:'vivo',
            price:2500
        }
    )
    if (data.acknowledged){
        console.log('data inserted')
    }


}
// insert_one();


const insert_many = async ()=>{
    let data  = await dbConnection('products');
    data = await data.insertMany(
        [{
            name:'c10',
            brand:'Micromax',
            price:1000
        },
    {
            name:'c20',
            brand:'OnePlus',
            price:3000
    }]
    )
    if (data.acknowledged){
        console.log('Multiple rows added')
    }
}

// insert_many();

const update = async ()=>{
    let data =  await dbConnection('products');
    data = await data.updateOne(
        {name:'m 40'},{$set:{name:'mi-40'}}
        
        )

    if (data.acknowledged){
        console.log('Updated')
    }
}
// update();

const update_many = async ()=>{
    let data = await dbConnection('products');
    data  = await data.updateMany(
        
            {brand:'vivo'},{$set:{brand:'oppo'}}
        
    )

    if (data.acknowledged){
        console.log('updated')
    }
}

// update_many();

const delete_data = async ()=>{
    let data = await dbConnection('products')
    data = await data.deleteMany(
        {brand:'oppo'}
    )
    if (data.deletedCount>0){
        console.log('data deleted')
    }
    else{
        console.log('already deleted')
    }
}
delete_data();