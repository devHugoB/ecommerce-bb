const express = require('express')
const userRouter = require('./routeur/user')
const productRouter = require('./routeur/product')
const categoryRouter = require('./routeur/category')
const commandRouter = require('./routeur/command')
const commandLineRouter = require('./routeur/commandLine')
const db = require('./data/database')
const app = express()


app.use(express.static("./assets"))
app.use(express.json())


app.get("/", (req, res) => {
  res.send("<h1>Bienvenue sur l'API ecommerce BB</h1>")
})

app.use('/utilisateur', userRouter)
app.use('/produit', productRouter)
app.use('/categorie', categoryRouter)
app.use('/commande', commandRouter)
app.use('/ligne', commandLineRouter)


app.listen(3000)