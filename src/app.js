//Depencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const bcrypt = require("bcrypt");

//Variables
const app = express();
const saltRounds = 10;
const Menu = require("./models/item/itemsSchema");

//App Configuration
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
  })
);

//*User session settings
const User = require("./models/user/userSchema");
passport.use(User.createStrategy());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => {
    done(err, user);
  });
});

//DataBase
mongoose.connect("mongodb://localhost:27017/pizzaRoroDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

//* Test DB
// bcrypt.hash("testpassword", saltRounds, (err, hash) => {
//   const userTest = new User({
//     email: "testemail",
//     password: hash,
//   });
//   userTest.save().then((newUser) => console.log(newUser));
// });

//*Passport initilization

app.use(passport.initialize());
app.use(passport.session());

//!Routes

require("./routes/routes")(app);

//Exports
module.exports = app;
