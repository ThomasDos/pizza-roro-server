const app = require("./app");

const PORT = process.env.PORT || 4000;

//Server

app.listen(PORT, () => {
  console.log("App is running on port : " + PORT);
});
