const router = require('express').Router()

const {
  createClient,
  getAllclients,
  getOneclient,
  deleteClient,
  updateClient

} = require('../controllers/clients.controller')

router.post('/', createClient)
router.get('/', getAllclients)
router.get('/:clientId', getOneclient)
router.delete('/:clientId', deleteClient)
router.put('/:clientId', updateClient)

module.exports = router
