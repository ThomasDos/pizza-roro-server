const registerRoute = require("./register");
const loginRoute = require("./login");
const itemRoute = require("./item");

module.exports = function (app) {
  registerRoute(app);
  loginRoute(app);
  itemRoute(app);
};
