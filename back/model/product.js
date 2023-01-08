const db = require("../data/database");

function getAllProducts() {
  return new Promise((resolve, rej) => {
    db.all("SELECT p.id, p.name, p.photo, p.description, p.price, c.id as cat_id, c.name as cat_name FROM product as p, category as c WHERE p.category_id = c.id", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function getProductById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT p.id, p.name, p.description, p.photo, p.description, p.price, c.id as cat_id, c.name as cat_name FROM product as p, category as c WHERE p.id=? AND p.category_id = c.id", id, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function addProduct(name, desc, price, photo, category) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO product (name,description,price,photo,category_id) VALUES(?,?,?,?,?)", [name, desc, price, photo, category], function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Produit ajouté", id: this.lastID })
    })
  })
}
function updateProduct(id, name, desc, price, photo, category) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE product SET name=?,description=?,price=?,photo=?,category_id=? WHERE id=?", [name, desc, price, photo, category, id], (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit modifié" })
    })
  })
}
function deleteProduct(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM product WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit supprimé" })
    })
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
}