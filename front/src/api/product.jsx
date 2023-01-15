export function getAllProducts() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/produit", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    }).then(response => response.json())
        .then(data => {
          return resolve(data)
        })
        .catch(error => reject(error))
  })
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/produit/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    }).then(response => response.json())
      .then(data => {
        return resolve(data)
      })
      .catch(error => reject(error))
  })
}

export function addCommand(user, cart) {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/commande", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({statut: "Validé", date: today, user})
    }).then(response => response.json())
      .then(data => {
        const command = data.id

        cart.map(product => {
          return fetch("http://localhost:3000/ligne", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({command, product: product.id, qty: product.qty})
          }).then(_ => resolve(data))
            .catch(error => reject(error))
        })
      })
      .catch(error => reject(error))
  })
}