const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();
const Credit = require('../models/Credit')
router.get('/',(req,res)=>{
    res.render('credit')
});

router.post('/newcredit',async(req,res)=>{
    try {
     
        const newcredit = new Credit(req.body)
        await newcredit.save()
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

router.get('/allcredit',async(req,res)=>{
    try {
        const allcredit = await Credit.find()
        console.log(allcredit)
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

module.exports = router;