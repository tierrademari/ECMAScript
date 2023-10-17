const promesa = (parametro) => {
    return new Promise((resolve, reject) => {
      if (parametro) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
  promesa(true)
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject

    
  promesa(false)
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject

    const promesaSinParametro = () => {
      return new Promise((resolve, reject) => {
          resolve("Se ha resuelto la promesa")
      })
    }

    promesaSinParametro()
    .then(response => console.log(response)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject