const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    businessManager: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
            },
        },
    },
    businessName: {
        type: String,
        required: true
    },
    way_to_pay: {
        type: String,
        enum: ['card', 'count'],
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
    document: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    },
    numOrders: {
        type: Number,
        required: false
    }
})


const clientModel = mongoose.model('clients', clientSchema)
module.exports = clientModel