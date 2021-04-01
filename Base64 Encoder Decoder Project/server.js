const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

/*
    In nodeJS function like 'btoa' and 'atob' does not exist to convert into Base64
    so we use "new buffer('variable which have the value' , 'ascii')toString('base64')" or
    "new buffer('variable which have the value' , 'base64')toString('ascii')"
*/ 

function decryptQueryParams(res, req, next){

    // console.log('pre->decrypt' , req.query)

    let newData = '';
    
    for (let i=0; i<req.query; i++) {
        if (req.query[i] == req.query[i].toLowerCase()) {
            newData += reqnewData[i].toUpperCase();
        }
        else{newData += req.query[i].toLowerCase();
        }
    }

    req.query = newData;

    // console.log('post->decrypt' , req.query)

    next()
}

function decodeQueryBase64(req,res,next){
    // for(let q in req.query){
    //     let data = req.query[q]
    //     data = new Buffer.from(data , 'base64').toString('utf8')
    //     req.query[q] = data
    // }
    let data = new Buffer.from(req.query , 'base64').toString();

    console.log(data)

    next()
}

app.get('/eval' , decryptQueryParams , decodeQueryBase64 , (req,res)=>{
    console.log(req.query)
    //To eval the code finally then send it!!
    res.send(req.query)
})

app.listen(4567 , ()=>{
    console.log('Server started at http://localhost:4567')
})