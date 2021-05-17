const User = require("../models/user/userSchema");

module.exports = function (app) {
  app.get("/register", (req, res) => {
    console.log("REQUESTED REGISTER");

    res.send("TEST");
  });

  // app.route("/register").post((req, res) => {
  //   User.register(
  //     new Account({ email: req.body.email }),
  //     req.body.password,
  //     function (err, account) {
  //       if (err) {
  //         return res.render("register", {
  //           info: "Sorry. That username already exists. Try again.",
  //         });
  //       }

  //   //send email verification
  //   var authenticationURL =
  //     "http://localhost:3000/verify?authToken=" + account.authToken;
  //   sendgrid.send(
  //     {
  //       to: account.email,
  //       from: "emailauth@yourdomain.com",
  //       subject: "Confirm your email",
  //       html:
  //         '<a target=_blank href="' +
  //         authenticationURL +
  //         '">Confirm your email</a>',
  //     },
  //     function (err, json) {
  //       if (err) {
  //         return console.error(err);
  //       }

  //       res.redirect("/email-verification");
  //     }
  //   );
  //     }
  //   );
  // });
};
