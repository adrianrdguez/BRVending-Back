const router = require('express').Router()

const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orders.controller')

router.get('/', getAllOrders)
router.get('/:orderId', getOrderById)
router.post('/', createOrder)
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrder)

module.exports = router
