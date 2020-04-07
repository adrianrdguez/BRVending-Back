const router = require('express').Router()

const {
  getAllOrdersByClient,
  getOneOrderByClient,
  deleteOneOrderByClient
} = require('../controllers/clients.controller')

router.get('/', getAllOrdersByClient)
router.get('/:ordersId', getOneOrderByClient)
router.delete('/:ordersId', deleteOneOrderByClient)

module.exports = router
