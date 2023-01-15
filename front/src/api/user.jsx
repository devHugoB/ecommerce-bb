export function connectUser(email, pass) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/utilisateur/connexion", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, pass})
    }).then(response => response.json())
        .then(data => {
          return resolve(data)
        })
        .catch(error => reject(error))
  })
}

export function addUser(email, pass) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/utilisateur/inscription", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, pass})
    }).then(response => response.json())
      .then(data => {
        return resolve(data)
      })
      .catch(error => reject(error))
  })
}

export function checkUserExist(email) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/utilisateur/verifies/${email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    }).then(response => response.json())
      .then(data => {
        return resolve(data)
      })
      .catch(error => reject(error))
  })
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/utilisateur/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    }).then(response => response.json())
      .then(data => {
        return resolve(data)
      })
      .catch(error => reject(error))
  })
}