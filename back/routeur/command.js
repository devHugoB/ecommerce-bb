const express = require('express')
const checkToken = require('../middleware/checkToken')
const { getAllCommands, getCommandById, getCommandByUser, addCommand, updateCommand, deleteCommand } = require('../model/command')
const routeur = express.Router()

routeur.get('/', (req, res) => {
  getAllCommands().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/:id', (req, res) => {
  getCommandById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/utilisateur/:user', (req, res) => {
  getCommandByUser(req.params.user).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.post('/', (req, res) => {
  addCommand(req.body.date, req.body.statut, req.body.user).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.put('/:id', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    updateCommand(req.params.id, req.body.date, req.body.statut, req.body.user).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

routeur.delete('/:id', (req, res) => {
  if (req.user.niveau === 1) {
    deleteCommand(req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

module.exports = routeur