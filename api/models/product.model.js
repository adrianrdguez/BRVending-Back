const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  }],
  photo_url: String,
  createdAt: {
    type: Number,
    default: Date.now()
  },
  stock: {
    type: String,
    required: true
  }
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel
