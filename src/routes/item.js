const Item = require("../models/item/itemsSchema");

module.exports = (app) => {
  app
    .route("/item")
    .get((req, res) => {
      console.log("ITEM REQ");
    })
    .post((req, res) => {
      const { _id, category, name, description, price, size } = req.body;

      res.send("POST on item");
    });
};
