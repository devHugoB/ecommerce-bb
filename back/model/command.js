const db = require("../data/database");

function getAllCommands() {
  return new Promise((resolve, rej) => {
    db.all("SELECT * FROM command", (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })

}
function getCommandById(id) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM command WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}

function getCommandByUser(user) {
  return new Promise((resolve, rej) => {
    db.get("SELECT * FROM command WHERE user_id=(SELECT id FROM user WHERE email=?)", user, (err, res) => {
      if (err) rej(err)
      resolve(res)
    })
  })
}
function addCommand(date, statut, user) {
  return new Promise((resolve, rej) => {
    db.run("INSERT INTO command (date,statut,user_id) VALUES(?,?,?)", [date, statut, user], function (err, res) {
      if (err) rej(err)
      resolve({ mess: "Commande ajoutée", id: this.lastID })
    })
  })
}
function updateCommand(id, date, statut, user) {
  return new Promise((resolve, rej) => {
    db.run("UPDATE command SET date=?,statut=?,user_id=? WHERE id=?", [date, statut, user, id], (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Commande modifiée" })
    })
  })
}
function deleteCommand(id) {
  return new Promise((resolve, rej) => {
    db.run("DELETE FROM command WHERE id=?", id, (err, res) => {
      if (err) rej(err)
      resolve({ mess: "Commande supprimée" })
    })
  })
}

module.exports = {
  getAllCommands,
  getCommandById,
  getCommandByUser,
  addCommand,
  updateCommand,
  deleteCommand
}