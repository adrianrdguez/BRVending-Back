const router = require('express').Router()

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct
} = require('../controllers/products.controller')

router.get('/', getAllProducts)
router.get('/:productId', getOneProduct)
router.post('/', createProduct)
router.delete('/:productId', deleteProduct)

module.exports = router
