const mongoose = require('mongoose')

const commercialSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Username is required']
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required']
  },
  lastName: {
    type: String,
    required: [true, 'LirstName is required']
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This is email is registered']
  },
  number: {
    type: Number,
    required: [true, 'Number is required']
  }
})

const commercialModel = mongoose.model('commercial', commercialSchema)
module.exports = commercialModel