const db = require("../data/database");

function getAllCommandLines() {
  return new Promise((resolve, rej) => {
    db.all("SELECT * FROM command_line", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })

}
function getCommandLineById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM command_line WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}

function getCommandLinesByCommand(command) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM command_line WHERE command_id=?", command, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function addCommandLine(command, product, qty) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO command_line (command_id,product_id,quantity) VALUES(?,?,?)", [command, product, qty], function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Produit ajouté à la commande", id: this.lastID })
    })
  })
}
function updateCommandLine(id, command, product, qty) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE command_line SET command_id=?,product_id=?,quantity=? WHERE id=?", [command, product, qty, id], (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit de la commande modifié" })
    })
  })
}
function deleteCommandLine(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM command_line WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Produit de la commande supprimé" })
    })
  })
}

module.exports = {
  getAllCommandLines,
  getCommandLineById,
  getCommandLinesByCommand,
  addCommandLine,
  updateCommandLine,
  deleteCommandLine
}