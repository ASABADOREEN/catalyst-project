const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();

const Credit = require('../models/CreditModel')
    
router.get('/',(req,res)=>{
    res.render('credit')
});
// Post  credit sales to db
router.post('/', async(req,res)=>{
    try{
      const newcredit = new Credit(req.body);
      await newcredit.save();
    //   redirect to sl
      res.redirect('/sales');
      console.log(req.body);
    }
    catch(err){
        console.log(err);
      res.status(400).send('Failed to save a record!!')    }
  
  });
module.exports = router;