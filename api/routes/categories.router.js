const router = require('express').Router()

const {
  createCategory,
  getAllCategories

} = require('../controllers/categories.controller')

router.post('/', createCategory)
router.get('/', getAllCategories)

module.exports = router
