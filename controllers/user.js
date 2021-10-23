const express = require('express');
const mongoose=require("mongoose");
const router = express.Router();

const UserModel=mongoose.model("Users")
router.post('/register', (req, res) => {
    let user = new UserModel()
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(user);
    });
});

router.get('/edit-user/:id', (req, res) => {
    let id = req.params.id;
    res.send(`User ${id} details has been updated`);
});
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    UserModel.findOne({email:id},(err,docs)=>{
        res.json(docs)
    })
})
router.get('/delete-user/:id', (req, res) => {
    let id = req.params.id;
    UserModel.deleteOne({email:id},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
    })
});

router.get('/', (req, res) => {
    UserModel.find((err,docs)=>{
        if (!err) {
            res.json(docs)
        }
    })
});

router.post('/login', (req, res) => {
    email_id = req.body.email;
    password_id = req.body.password;
    console.log(email_id,password_id)
    UserModel.findOne({email:email_id,password:password_id},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
    }
    );
});

module.exports = router;
