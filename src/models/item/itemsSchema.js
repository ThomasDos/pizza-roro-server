const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  items: {
    category: [
      {
        pizza: [
          {
            name: {
              String,
              required: true,
            },
            description: {
              String,
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
              String,
              required: true,
            },
            description: {
              String,
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
              String,
              required: true,
            },
            description: {
              String,
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
              String,
              required: true,
            },
            description: {
              String,
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
              String,
              required: true,
            },
            description: {
              String,
              required: true,
            },
            price: Number,
            imageUrl: String,
          },
        ],
      },
    ],

    promos: [
      {
        name: {
          String,
          required: true,
        },
        active: Boolean,

        description: {
          String,
          required: true,
        },
        price: Number,
        discount: Number,
      },
    ],
  },
});

const Item = new mongoose.model("item", itemSchema);

module.exports = Item;
