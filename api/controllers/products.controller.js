const ProductModel = require('../models/product.model')
const ProductCategoryModel = require('../models/product_categories.model')
const { handleError } = require('../utils')

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct
}

function getAllProducts(req, res) {
  ProductModel
    .find()
    .then((products) => res.json(products))
    .catch((err) => handleError(err, res))
}

function getOneProduct() {
  ProductModel.findById(req.params.productId)
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}

function createProduct(req, res) {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => handleError(err, res))
}

function deleteProduct() {

}
