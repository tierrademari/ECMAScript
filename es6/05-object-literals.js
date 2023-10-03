// Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. 
function newUser(name, age) {
    return {
        name, //forma nueva
        age: age //forma vieja
    }
}
const user = newUser("Kira", 3)
console.log(user); // Output { name: 'Kira', age: 3 }

//Es posible utilizarlo para crear objetos
const nombre = "Andres"
const edad = 23
const sujeto = {nombre, edad, nuevaPropiedad: 'jajaja' }
console.log(sujeto)

//Output: { nombre: 'Andres', edad: 23 }