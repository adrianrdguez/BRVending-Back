const router = require('express').Router()

const {
    getAllOrders,
    getOneOrder,
    createOrder,
    deleteOrder
} = require('../controllers/orders.controller')

router.get('/orders', getAllOrders)
router.get('/orders/:orderId', getOneOrder)
router.post('/orders', createOrder)
router.delete('/orders/:orderId', deleteOrder)

module.exports = router
