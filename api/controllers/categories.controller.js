const Category = require('../models/categories.model.js')
const { handleError } = require('../utils')

module.exports = {
  createCategory,
  getAllCategories
}

function createCategory (req, res) {
  Category.create(req.body)
    .then((clients) => res.json(clients))
    .catch((err) => handleError(err, res))
}

function getAllCategories (req,res ) {
  Category
    .find()
    .then(categories => res.json(categories))
    .catch((err) => handleError(err, res))
}
