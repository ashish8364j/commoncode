const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  detailUrl: {
    type: String,
    required: true
  },
  title: {
    shortTitle: {
      type: String,
      required: true
    },
    longTitle: {
      type: String,
      required: true
    }
  },
  price: {
    mrp: {
      type: Number,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    discount: {
      type: String,
      required: true
    }
  },
  quantity: {
    type: Number,
    default: 1
  },
  description: {
    type: String,
  },
  discount: {
    type: String
  },
  tagline: {
    type: String
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
