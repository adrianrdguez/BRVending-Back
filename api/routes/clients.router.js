const router = require('express').Router()

const {
  getAllclients,
  getOneclient,
  createClient,
  deleteClient,
  getAllOrdersByClient,
  getOneOrderByClient,
  deleteOneOrderByClient
} = require('../controllers/clients.controller')

router.get('/', getAllclients)
router.get('/:clientsId', getOneclient)
router.post('/', createClient)
router.delete('/:clientId', deleteClient)
router.get('/clientsId/:orders', getAllOrdersByClient)
router.get('/clientsId/:orders/:ordersId', getOneOrderByClient)
router.delete('/clientsId/:orders/:ordersId', deleteOneOrderByClient)

module.exports = router
