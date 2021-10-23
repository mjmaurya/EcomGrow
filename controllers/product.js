const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const ProductModel=require('../models/product.model');
router.get('/', (req, res) => {
    ProductModel.find((err, docs) => {
        if (!err) { res.send(docs); }
});
});
router.get('/:id', (req, res) => {
    let id = req.params.id;
    ProductModel.findById(id,(err,docs)=>{
        if(!err){
            res.json(docs)
        }
    })
});
router.post('/add-product',(req,res)=>{
    console.log(req.body);
    let product=new ProductModel()
    product.name=req.body.name;
    product.price=req.body.price;
    product.desc=req.body.desc;
    product.category=req.body.category;
    product.discount=req.body.discount;
    product.stock=req.body.stock;
    product.image=req.body.image;
    product.save((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            console.log(err);
        }
    });
});

router.patch('/update-product/:productID',(req,res)=>{
    let id=req.params.productID;
    let updateOps={};
    for(let ops of Object.keys(req.body)){
        updateOps[ops]=req.body[ops];
    }
    ProductModel.updateOne({_id:id},{$set:updateOps},(err,docs)=>{
        if(!err){
            res.json(docs);
        }
    });
    }
);
router.delete('/delete/:productid',(req,res)=>{
    let id=req.params.productid;
    ProductModel.remove({_id:id},(err,docs)=>{
        if(!err){
            res.json(docs);
        }
    });
    });
module.exports = router;