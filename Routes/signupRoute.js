const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();
const UserSignUp = require('../models/SignUpModel')
    
router.get('/',(req,res)=>{
    res.render('signup')
});

//   post user to database
router.post('/', async(req, res) => {
    const newuser = new UserSignUp(req.body);

await UserSignUp.register(newuser,req.body.password)
    res.redirect('/login')

//  
})

module.exports = router;