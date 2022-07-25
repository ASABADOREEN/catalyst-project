const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();

const Procurement = require('../models/ProcurementModel')

router.get('/',(req,res)=>{
    res.render('procurement')
});

router.post('/', async(req,res)=>{
    try{
        // Procurement is the schema collection
      const newProc = new Procurement(req.body);
      await newProc.save();
    //   redirect to 
      res.redirect('/sales');
      console.log(req.body);
    }
    catch(err){
        console.log(err);
      res.send('Failed to save a record!!')    }
  
  });
module.exports = router;