const ProductModel = require('../models/product.model')
const { handleError } = require('../utils')

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct
}

function getAllProducts () {

}

function getOneProduct () {

}

function createProduct (req, res) {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}

function deleteProduct () {

}
