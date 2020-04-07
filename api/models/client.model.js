const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  business_manager: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    }
  },
  shop_name: String,
  business_name: {
    type: String,
    required: true
  },
  way_to_pay: {
    type: String,
    enum: ['credit', 'count'],
    default: 'count'
  },
  opening_hours: {
    type: String,
    required: false
  },
  zipcode: {
    type: Number,
    required: true
  },
  VATIN: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'orders'
  }
})

const clientModel = mongoose.model('clients', clientSchema)
module.exports = clientModel
