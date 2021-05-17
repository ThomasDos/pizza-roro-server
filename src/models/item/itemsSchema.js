const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  items: [Object],
  promos: Object,
});

const Item = new mongoose.model("item", itemSchema);

module.exports = Item;
