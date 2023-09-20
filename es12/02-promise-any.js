const promesa1 = new Promise((resolve, reject) => reject ("reject"))
const promesa2 = new Promise((resolve, reject) => resolve ("resolve 1"))
const promesa3 = new Promise((resolve, reject) => resolve ("resolve 2"))

//si una promesa falla no se ejecuta el then
Promise.any([promesa1,promesa2,promesa3])
.then(response => {console.log("Si alguna de las respuestas es positiva"); console.log(response); })
.catch(error => console.log(error))

