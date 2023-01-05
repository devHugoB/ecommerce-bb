const express = require('express')
const checkToken = require('../middleware/checkToken')
const { connectUser, addUser, getUserIdByEmail, updateUser, deleteUser } = require('../model/user')
const routeur = express.Router()

routeur.post('/connexion', (req, res) => {
  connectUser(req.body.email, req.body.pass).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/:email', (req, res) => {
  getUserIdByEmail(req.params.email).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.post('/inscription', (req, res) => {
  addUser(req.body.email, req.body.pass).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.put('/:id', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    updateUser(req.params.id, req.body.email, req.body.pass).then(data => {
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
    deleteUser(req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

module.exports = routeur