const express = require('express');
const mongoose = require('mongoose');
var User = require('../models/user.model')
const UserModel = mongoose.model("User");

const router = express.Router();


router.post("/",(req,res)=>{
    var user= new UserModel();
    user.displayName= req.body.displayName;
    user.email= req.body.email;
    user.password= req.body.password;
    user.save((err,doc)=>{
        if(!err)
            res.status(200).send(doc);
        else
            console.log(err)
    })
})


module.exports = router;