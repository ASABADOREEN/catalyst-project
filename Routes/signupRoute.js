const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const Employee = require('../models/Employee')

const router = express.Router();
    
router.get('/',(req,res)=>{
    res.render('signup')
});

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
      await Employee.register(
        req.body,
        req.body.password
      );
  
      res.redirect("/login")
    } catch (error) {
     res.send("try again")
      console.error(error);
    }
  });

module.exports = router;