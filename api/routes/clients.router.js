const router = require('express').Router()

const {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
  updateClient,
  getAllOrdersByClient,
  getOneOrderByClient
} = require('../controllers/clients.controller')

router.post('/', createClient)
router.get('/', getAllClients)
router.get('/:clientId/orders', getAllOrdersByClient)
router.get('/:clientId', getOneClient)
router.delete('/:clientId', deleteClient)
router.put('/:clientId', updateClient)

module.exports = router
