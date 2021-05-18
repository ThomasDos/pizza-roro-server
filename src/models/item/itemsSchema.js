const mongoose = require("mongoose");
const findOrCreatePlugin = require("mongoose-findorcreate");

const itemSchema = new mongoose.Schema({
  items: {
    category: [
      {
        pizza: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            price: {
              small: Number,
              regular: Number,
              Large: Number,
            },
            imageUrl: String,
          },
        ],
      },

      {
        drink: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            price: Number,
            imageUrl: String,
          },
        ],
      },

      {
        dessert: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            price: Number,
            imageUrl: String,
          },
        ],
      },

      {
        appetizer: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            price: Number,
            imageUrl: String,
          },
        ],
      },
      {
        miscellaneous: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            price: Number,
            imageUrl: String,
          },
        ],
      },
    ],
  },

  promos: [
    {
      name: {
        type: String,
        required: true,
      },
      active: Boolean,

      description: {
        type: String,
        required: true,
      },
      price: Number,
      discount: Number,
    },
  ],
});

itemSchema.plugin(findOrCreatePlugin);

const Item = new mongoose.model("item", itemSchema);

module.exports = Item;
