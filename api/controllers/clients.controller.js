const ClientModel = require('../models/clients.model.js')
const { handleError } = require('../utils')

module.exports = {
  getAllclients,
  getOneclient,
  createClient,
  deleteClient,
  getAllOrdersByClient,
  getOneOrderByClient,
  deleteOneOrderByClient
}

function getAllclients(req, res) {
  ClientModel
    .find()
    .then(clients => res.json(clients))
    .catch((err) => handleError(err, res))
};

function getOneclient() {

};

function createClient(req, res) {
  ClientModel
    .create(req.body)
    .then(client => res.json(client))
    .catch((err)=> handleError(err, res))
};

function deleteClient() {

};

function getAllOrdersByClient() {

};

function getOneOrderByClient() {

};

function deleteOneOrderByClient() {

};

