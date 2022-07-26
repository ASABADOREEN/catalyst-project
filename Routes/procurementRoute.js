const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport');
const Procurement = require('../models/Procurement');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('procurement')
});

router.post('/newproc',async(req,res)=>{
    try {
     
        const newproc = new Procurement(req.body)
        await newproc.save()
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

router.get('/allprocurement',async(req,res)=>{
    try {
        const allprocurement = await Procurement.find()
        res.send('Added successfully!')
    } catch (error) {
        res.send('Something went wrong, please try again')
    }
        
    
});

module.exports = router;