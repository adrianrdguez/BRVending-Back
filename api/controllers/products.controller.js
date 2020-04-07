const ProductModel = require('../models/product.model')
const { handleError } = require('../utils')

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct
}

function getAllProducts (req, res) {
  ProductModel
    .find()
    .populate('category', { name: 1, _id: 0 })
    .then((products) => {
      res.json(products)
    })
    .catch((err) => handleError(err, res))
}

function getOneProduct (req, res) {
  ProductModel
    .findById(req.params.productId)
    .populate('category', { name: 1, _id: 0 })
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}

function createProduct (req, res) {
  ProductModel
    .create(req.body)
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}

function deleteProduct (req, res) {
  ProductModel
    .findByIdAndDelete(req.params.productId)
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}
