export function connectUser(email, password) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/utilisateur/connexion", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then(response => response.json())
        .then(data => {
          return resolve(data)
        })
        .catch(error => reject(error))
  })
}

export function addUser(email, password) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/utilisateur/inscription", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then(response => response.json())
      .then(data => {
        return resolve(data)
      })
      .catch(error => reject(error))
  })
}