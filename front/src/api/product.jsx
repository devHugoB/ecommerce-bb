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