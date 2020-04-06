const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    createdAt: {
        type: Number,
        default: Date.now()
    },
    totalPrice: {
        type: Number,
        required: false
    },
    products: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        enum: ['Send', 'Not Send'],
        default: 'Not Send'
    },
    orderNumber: {
        type: Number,
        required: true
    }
})

const ordersModel = mongoose.model('orders', ordersSchema)
module.exports = ordersModel

