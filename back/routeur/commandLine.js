const express = require('express')
const checkToken = require('../middleware/checkToken')
const { getAllCommandLines, getCommandLineById, getCommandLinesByCommand, addCommandLine, updateCommandLine, deleteCommandLine } = require('../model/commandLine')
const routeur = express.Router()

routeur.get('/', (req, res) => {
  getAllCommandLines().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/:id', (req, res) => {
  getCommandLineById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/commande/:command', (req, res) => {
  getCommandLinesByCommand(req.params.command).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.post('/', (req, res) => {
  addCommandLine(req.body.command, req.body.product, req.body.qty).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.put('/:id', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    updateCommandLine(req.params.id, req.body.command, req.body.product, req.body.qty).then(data => {
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
    deleteCommandLine(req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

module.exports = routeur