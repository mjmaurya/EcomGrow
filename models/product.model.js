const mongoose=require('mongoose')

const Schema=mongoose.Schema

let productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    },
    discount:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Product',productSchema)