const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

// express Session 
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
 
// initatiate Routes
const loginRoute = require('./routes/loginRoute');
const procurementRoute = require('./routes/procurementRoute');
const salesRoute = require('./routes/salesRoute');
const creditRoute = require('./routes/creditRoute');
const signupRoute = require('./routes/signupRoute');


//Database
let config = require('./config/database');

//models 


//initiatlising server
const server = express();
const Procurement = require('./models/Procurement');
const Sales = require('./models/Sales');
const Credit = require('./models/Credit')
const Employee = require('./models/Employee')

//database setup
//setting connection
mongoose.connect(config.database, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

//checking connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
  console.error(err);
});


// Setting view Engine.
server.set("view engine", "pug");
server.set("views", "./views");

// //express middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(expressSession);

//configuring passport
server.use(passport.initialize());
server.use(passport.session());

 //Passport Local Strategy
passport.use(Employee.createStrategy());
passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());
//LoginChecker
// const loginchecker = (req, res, next) => {
//   if (req.path != "/login" && req.path != "/register" && !req.session.user) {
//     res.redirect("/login");
//   }
//   next();
// };
//server.use(loginchecker);


// Setting up Routes
server.use('/', loginRoute);
server.use('/procurement', procurementRoute);
server.use('/sales', salesRoute);
server.use('/credit', creditRoute);
server.use('/signup', signupRoute);


// handling non existing routes
server.get("*", (req, res) => {
    res.status(404).render("notfound");
  });

 
  
  // server
  server.listen(3000, () => console.log("Listening on Port 3000"));
  
