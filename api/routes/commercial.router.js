const router = require('express').Router()

const {
  getAllCommercial,
  getCommercialById,
  deleteCommercialById,
  updateCommercial
} = require('../controllers/commercial.controller')

router.get('/', getAllCommercial)
router.get('/:id', getCommercialById)
router.delete('/:id', deleteCommercialById,)
router.put('/:id', updateCommercial)

module.exports = router



