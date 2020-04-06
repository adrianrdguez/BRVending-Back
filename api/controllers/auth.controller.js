const CommercialModel = require('../models/commercial.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

module.exports = {
  signup,
  login
}
function signup(req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.commercial_password, 10)
  const commercialBody = {
    userName: req.body.commercial_userName,
    email: req.body.commercial_email,
    password: hashedPwd
  }
  CommercialModel
    .create(commercialBody)
    .then(() => {
      const commercialData = { username: req.body.commercial_userName, email: req.body.commercial_email }

      const token = jwt.sign(
        commercialData,
        process.env.SECRET, // TAKE SECRET KEY FROM .ENV
        { expiresIn: '1w' }
      )

      return res.json({ token: token, ...commercialData })
    })
    .catch((err) => {
      res.status(403).json({ error: err })
    })
}
function login(req, res) {
  CommercialModel
    .findOne({ email: req.body.commercial_email })
    .then(commercial => {
      if (!commercial) { return res.json({ error: 'wrong email' }) }

      bcrypt.compare(req.body.commercial_password, commercial.password, (err, result) => {
        if (err) { handleError(err) }
        if (!result) { return res.json({ error: `wrong password for ${req.body.commercial_email}` }) }

        const commercialData = { username: commercial_userName, email: commercial.email }

        const token = jwt.sign(
          commercialData,
          process.env.SECRET,
          { expiresIn: '1h' }
        )
        return res.json({ token: token, ...commercialData })
      })
    })
    .catch(err => handleError(err, res))
}
