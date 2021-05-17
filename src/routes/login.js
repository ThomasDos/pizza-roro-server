const passport = require("passport");

module.exports = function (app) {
  app.get("/login", (req, res) => {
    console.log("REQUESTED LOGIN");

    res.send("TEST LOGIN");
  });
  // app.route("/login").post(
  //   passport.authenticate("local", {
  //     successRedirect: "/",
  //     failureRedirect: "/login",
  //   })
  // );
};
