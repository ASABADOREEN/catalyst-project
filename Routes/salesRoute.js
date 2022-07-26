const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();

const Sales = require('../models/Sales')
    
router.get('/',(req,res)=>{
    res.render('sales')
});

router.post('/newsale',async(req,res)=>{
    try {
     
        const newsale = new Sales(req.body)
        await newsale.save()
        res.send('sales were added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

router.get('/allsales',async(req,res)=>{
    try {
        const allsales = await Sales.find()
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

module.exports = router;