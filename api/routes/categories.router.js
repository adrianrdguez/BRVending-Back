const router = require('express').Router()

const {
  createCategory

} = require('../controllers/categories.controller')

router.post('/', createCategory)

module.exports = router
