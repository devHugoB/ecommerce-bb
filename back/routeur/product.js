const express = require('express')
const checkToken = require('../middleware/checkToken')
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../model/product')
const routeur = express.Router()

routeur.get('/', (req, res) => {
  getAllProducts().then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.get('/:id', (req, res) => {
  getProductById(req.params.id).then(data => {
    res.json(data)
  }).catch(err => {
    res.status(500).json(err)
  })
})

routeur.post('/', checkToken, (req, res) => {
  if (req.user.niveau === 1) {
    addProduct(req.body.name, req.body.desc, req.body.price, req.body.photo, req.body.category).then(data => {
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
    updateProduct(req.params.id, req.body.name, req.body.desc, req.body.price, req.body.photo, req.body.category).then(data => {
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
    deleteProduct(req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
      res.status(500).json(err)
    })
  } else {
    res.status(403).json({ mess: "Vous devez être administrateur" })
  }
})

module.exports = routeur