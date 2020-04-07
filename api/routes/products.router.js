const router = require('express').Router()

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct
} = require('../controllers/products.controller')

router.get('/products', getAllProducts)
router.get('/products/:productId', getOneProduct)
router.post('/products', createProduct)
router.delete('/products/:productId', deleteProduct)

module.exports = router
