const connection=require("./models")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require('./controllers/user');
const ProductController = require('./controllers/product');
const cors = require('cors');
const path= require('path');


// Middleware
var __dirname = path.resolve();
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,'src/build')));
app.use(cors());

app.use('/api/users', UserController);

app.use('/api/products', ProductController);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/build','index.html'));
})
app.listen(3002, () => {
    console.log('Server started on port 3002');
});


