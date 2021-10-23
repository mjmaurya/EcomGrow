const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GroceryApp', { useNewUrlParser: true },(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('connected to mongodb');
    }
}
);
const user=require("./user.model")