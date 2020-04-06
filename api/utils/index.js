const jwt = require('jsonwebtoken')
const CommercialModel = require('../models/commercial.model')

// Authenticate Middleware
function authCommercial (req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      CommercialModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

// Return HTTP error with details in JSON
function handleError (err, res) {
  return res.status(400).json(err)
}

module.exports = {
  authCommercial,
  handleError
}
