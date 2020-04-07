const Category = require('../models/categories.model.js')
const { handleError } = require('../utils')

module.exports = {
  createCategory
}

function createCategory (req, res) {
  Category.create(req.body)
    .then((clients) => res.json(clients))
    .catch((err) => handleError(err, res))
}
