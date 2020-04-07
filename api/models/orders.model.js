const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  client: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
    required: true
  }],
  totalPrice: Number,
  products: String,
  is_sent: { Boolean, default: false },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const orderModel = mongoose.model('user', orderSchema)
module.exports = orderModel
