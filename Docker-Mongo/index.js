const express = require('express');
const mongoose = require('mongoose');


const app = express();
// const mongo = mongoose.connect('mongodb://root:secret@docker-mongo:27017/docker', { useNewUrlParser: true });
//
// if (mongo) {
//     console.log('MongoDB connected...');
// }

app.get('/', (req, res)=>{
    res.end('Hello World');
});


const _port = process.env.PORT || 5000;
app.listen(_port,()=>{
    console.log(`Application listening on port: ${_port}`)
});
