const mongoose = require("mongoose");
const findOrCreatePlugin = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  facebookId: String,
  history: Array,
  infos: Object,
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
userSchema.plugin(findOrCreatePlugin);

const User = new mongoose.model("User", userSchema);

module.exports = User;
