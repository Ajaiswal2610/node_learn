const reqFilter =(req,resp,next)=>{
    // console.log('reqFilter is here');
    if (!req.query.age){
        resp.send("please provide age")
    }
    else if(req.query.age<18){
        resp.send('You are under aged')

    }
    else{
    next();
    }
}

module.exports = reqFilter;