//Depencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const bcrypt = require("bcrypt");
//Variables
const app = express();
const saltRounds = 10;
const User = require("./models/users/userSchema");
//App Configuration
app.use(express.urlencoded({ extended: true }));
//DB
mongoose.connect("mongodb://localhost:27017/pizzaRoroDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
bcrypt.hash("testpassword", saltRounds, (err, hash) => {
  const userTest = new User({
    email: "testemail",
    password: hash,
  });
  userTest.save().then((newUser) => console.log(newUser));
});

//Routes
app.route("/").get((req, res) => {
  console.log("Request on / get");
  res.send("test");
});

//Server configuration

//Exports
module.exports = app;
