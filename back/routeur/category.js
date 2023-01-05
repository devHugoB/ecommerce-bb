const express = require('express')
const checkToken = require('../middleware/checkToken')
const { getAllCategories, getCategoryById, addCategory, updateCategory, deleteCategory } = require('../model/category')
const routeur = express.Router()

routeur.get('/', (req, res) => {
  getAllCategories().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/:id', (req, res) => {
  getCategoryById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.post('/', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    addCategory(req.body.name).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

routeur.put('/:id', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    updateCategory(req.params.id, req.body.name).then(data => {
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
    deleteCategory(req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

module.exports = routeur