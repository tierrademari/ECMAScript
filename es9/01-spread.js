const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}
console.log(objetoOriginal)
console.log(objetoReferencia)
console.log(objetoCopia)
console.log(objetoReferencia === objetoOriginal) // true
console.log(objetoOriginal === objetoCopia )// false

//Copiar el objeto y meterle mas valores
const usuario1 = {
    nombre: "Andres",
    age: 23,
  }
  
  const usuario2 = {
      ...usuario1,
      plataforma: "Platzi"
  }

  console.log(usuario1)
  console.log(usuario2)

const user = { 
    username: 'ewew', 
    age: 20, 
    country: 'CO'}
const {username, ...values} = user;
console.log(username);
console.log(values);
console.log(user);
