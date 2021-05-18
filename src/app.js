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
const Item = require("./models/item/itemsSchema");

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
  new LocalStrategy(function (email, password, done) {
    User.findOne({ email: email }, function (err, user) {
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

Item.findOne({}, async (err, itemCollection) => {
  const newPizzaTest = {
    name: "myPizzaYolo",
    description: "Deuxieme pizza test",
    price: { small: 5, large: 25 },
  };
  if (err) {
    console.log(err);
  } else {
    if (!itemCollection) {
      const newItemCollection = new Item({
        items: {
          category: [{ pizza: [newPizzaTest] }],
        },
      });

      newItemCollection.save();
    } else {
      const myArray = await itemCollection.items.category.find(
        (category) => category.pizza
      ).pizza;
      myArray.forEach((pizza) => {
        if (pizza.name === newPizzaTest.name) {
          console.log("pizza is already existing");
        } else {
          itemCollection.items.category[0].pizza.push(newPizzaTest);
          itemCollection.save();
        }
      });
    }
  }
});

// const pizzaTest = new Item({
//   items: {
//     category: {
//       pizza: {
//         name: "pizzaTest",
//         description: "this is my pizzaTest",
//         price: { large: 50 },
//       },
//     },
//   },
// });

// pizzaTest.save();

//*Passport initilization

app.use(passport.initialize());
app.use(passport.session());

//Routes

require("./routes/routes")(app);

//Exports
module.exports = app;
