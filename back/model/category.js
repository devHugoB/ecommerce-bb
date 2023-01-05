const db = require("../data/database");

function getAllCategories() {
  return new Promise((resolve, rej) => {
    db.all("SELECT * FROM category", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })

}
function getCategoryById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM category WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function addCategory(name) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO category (name) VALUES(?)", name, function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Catégorie ajoutée", id: this.lastID })
    })
  })
}
function updateCategory(id, name) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE category SET name=? WHERE id=?", [name, id], (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Catégorie modifiée" })
    })
  })
}
function deleteCategory(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM category WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Catégorie supprimée" })
    })
  })
}

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory
}