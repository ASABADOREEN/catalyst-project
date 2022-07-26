const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();
    
router.get('/',(req,res)=>{
    res.render('login')
});

router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/" }),
    (req, res) => {
    
      //giving a session to the user when successfully logged in.
      req.session.user = req.user;
      let user = req.session.user;
  
    
      res.redirect("/sales")
    })

module.exports = router;