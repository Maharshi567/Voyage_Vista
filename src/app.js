const express = require('express')
const app = express();
const mongoose = require('mongoose');
const mainrouter = require('../routes/index');
const port = 10000;

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
 
app.use(mainrouter);

DB_URL = 'mongodb://0.0.0.0/DataBase';

mongoose.connect(DB_URL);
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("successfully database connected");
})



app.listen(port,()=>{
    console.log('listening on ',port)
})