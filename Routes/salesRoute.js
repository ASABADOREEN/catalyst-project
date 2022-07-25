const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();

const Sales = require('../models/SalesModel');
  
// get sales route
router.get('/',(req,res)=>{
    res.render('sales')
});

// Post  sales to db
router.post('/', async(req,res)=>{
    try{
      const newsale = new Sales(req.body);
      await newsale.save();
      res.redirect('/credit');
      console.log(req.body);
    }
    catch(err){
        console.log(err);
      res.status(400).send('Failed to save a record!!')    }
  
  });
module.exports = router;