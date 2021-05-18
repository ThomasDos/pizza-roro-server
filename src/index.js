const app = require("./app");

const PORT = process.env.PORT || 4000;

//Server

app.listen(PORT, (err) => {
  err && console.log(err);
  console.log("App is running on port : " + PORT);
});
