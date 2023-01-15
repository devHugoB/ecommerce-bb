const db = require("../data/database");
const jwt = require('jsonwebtoken');

function connectUser(email, pass) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM user WHERE email=?", email, (err, res) => {
      if (err) rej(err)
      if (res && res.password === pass) {
        const token = jwt.sign({ user: res.email, niveau: res.level }, 'la clé');
        resolve({ token, id: res.id })
      }
      rej({ message: "Identifiant invalide" })
    })
  })
}

function getUserById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM user WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve(res ?? [])
    })
  })
}

function getUserIdByEmail(email) {
  return new Promise((resolve, rej) => {
    db.get("SELECT id FROM user WHERE email=?", email, (err, res) => {
      if (err) rej(err)
      resolve(res ?? [])
    })
  })
}
function addUser(email, pass) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO user (email,password,level) VALUES(?,?,0)", [email, pass], function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Utilisateur ajouté", id: this.lastID })
    })
  })
}

function updateUser(id, email, pass) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE user SET email=?,pass=? WHERE id=?", [email, pass, id], (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit modifié" })
    })
  })
}

function deleteUser(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM user WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Utilisateur supprimé" })
    })
  })
}

module.exports = {
  connectUser,
  getUserById,
  getUserIdByEmail,
  addUser,
  updateUser,
  deleteUser
}