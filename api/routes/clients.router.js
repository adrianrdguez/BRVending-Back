const router = require('express').Router()

const {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
  updateClient

} = require('../controllers/clients.controller')

router.post('/', createClient)
router.get('/', getAllClients)
router.get('/:clientId', getOneClient)
router.delete('/:clientId', deleteClient)
router.put('/:clientId', updateClient)

module.exports = router
