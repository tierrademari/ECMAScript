//Cuando todas las promesas son terminadas
const promesa1 = new Promise((resolve, reject) => reject ("Esta promesa esta rechazada"))
const promesa2 = new Promise((resolve, reject) => resolve ("Esta promesa esta aprobada"))
const promesa3 = new Promise((resolve, reject) => resolve ("Esta promesa esta aprobada"))

//si una promesa falla no se ejecuta el then
Promise.all([promesa1,promesa2,promesa3])
.then(response => {console.log("Termina todas y luego cae en el then"); console.log(response); })
.catch(error => console.log(error))

//siempre se ejecuta el then
Promise.allSettled([promesa1,promesa2,promesa3])
.then(response => {console.log("Termina todas y luego cae en el then"); console.log(response); })
