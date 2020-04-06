const CommercialModel = require('../models/commercial.model')
const { handleError } = require('../utils')

module.exports = {
  getAllCommercial,
  getCommercialById,
  deleteCommercialById,
  updateCommercial
}

function getAllCommercial(req, res) {
  CommercialModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getCommercialById(req, res) {
  CommercialModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteCommercialById(req, res) {
  CommercialModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateCommercial(req, res) {
  CommercialModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
