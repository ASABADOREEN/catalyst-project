const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport')

const router = express.Router();
    
router.get('/',(req,res)=>{
    res.render('login')
});

router.post('/', passport.authenticate('local',{failureRedirect:'/login'}), 
(req,res)=>{
    console.log(req.body);
    req.session.user = req.user
    // take user to dashborad on successful login
  
      res.redirect('/sales');

});


// log out
router.get('/logout', (req, res)=>{

    req.session.destroy()
 
      return res.redirect('/');

  });


module.exports = router;