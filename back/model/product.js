const db = require("../data/database");

function getAllProducts() {
  return new Promise((resolve, rej) => {
    db.all("SELECT * FROM product", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function getProductById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM product WHERE id=?", id, (err, res) => {
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