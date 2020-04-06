const router = require('express').Router()

const authRouter = require('./auth.router')
const commercialRouter = require('./commercial.router')
const clientsRouter = require('./clients.router')

const { authCommercial } = require('../utils') // Authenticated Route

router.use('/commercials', commercialRouter)
router.use('/auth', authRouter)

router.use('/clients', clientsRouter)

router.get('/whoami', authCommercial, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
