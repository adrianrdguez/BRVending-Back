const router = require('express').Router()

const {
  getAllOrdersByClient,
  getOneOrderByClient,
  deleteOneOrderByClient
} = require('../controllers/clients.controller')

router.get('/:clientId/orders', getAllOrdersByClient)
router.get('/:clientId/orders/:ordersId', getOneOrderByClient)
router.delete('/:clientId/orders/:ordersId', deleteOneOrderByClient)

module.exports = router
