const promesa = (something) => {
    return new Promise((resolve, reject) => {
      if (something) {
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
    .finally(() => console.log('Finally'))
    
  promesa(false)
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject
    .finally(() => console.log('Finally'))