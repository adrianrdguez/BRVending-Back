const router = require('express').Router()
const { authUser } = require('../utils/index')

const authRouter = require('./auth.router')
// const usersRouter = require('./user.router')
const clientsRouter = require('./clients.router')
const productsRouter = require('./products.router')
const orderRouter = require('./orders.clients.router')
// const meRouter = require('./me.router')

router.use('/me/clients', authUser, clientsRouter)
router.use('/me/clients/:clientId/orders', authUser, orderRouter)
router.use('/auth', authRouter)
router.use('/products', productsRouter)
// router.use('/me', meRouter)
// router.use('/users', authUser, usersRouter)

// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router
