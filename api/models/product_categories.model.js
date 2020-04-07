const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({ name: String })

const categoryModel = mongoose.model('user', categorySchema)
module.exports = categoryModel
