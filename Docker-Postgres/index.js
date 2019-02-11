const express = require('express');
const Sequelize = require('sequelize');


const app = express();
const sequelize = new Sequelize('postgres://postgres:secret@docker-postgres:5432/docker');
// const mongo = mongoose.connect('mongodb://soyket:secret@docker-mongo:51452/docker', { useNewUrlParser: true });

if (sequelize) {
    console.log('PostgresDB connected...');
}

app.get('/', (req, res)=>{
    res.end('Hello World');
});


const _port = process.env.PORT || 5000;
app.listen(_port,()=>{
    console.log(`Application listening on port: ${_port}`)
});
