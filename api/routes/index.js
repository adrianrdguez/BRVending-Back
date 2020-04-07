const router = require('express').Router()
const { authUser } = require('../utils/index')

const authRouter = require('./auth.router')
const usersRouter = require('./user.router')
const clientsRouter = require('./clients.router')
// const meRouter = require('./me.router')

router.use('/auth', authRouter)
// router.use('/me', meRouter)
router.use('/users', authUser, usersRouter)
router.use('/clients', clientsRouter)

// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router
