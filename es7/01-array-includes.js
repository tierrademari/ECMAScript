// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento. Permite indices negativos

let numbers = [1,3,4,6,7,8];
console.log(numbers.includes(1)); // false
console.log(numbers.includes(9)); // false

const saludo = "Hola mundo"
console.log(saludo.includes("Hola")) // true
console.log(saludo.includes("Mundo")) // false
console.log(saludo.includes(" ")) // true
console.log(saludo.includes("Hola", 0)) // true
console.log(saludo.includes("Hola", 1)) // false
console.log(saludo.includes("mundo", -5)) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]
console.log(frutas.includes("manzana")) // true
console.log(frutas.includes("manzana", 0)) // true
console.log(frutas.includes("manzana", 1)) // false
console.log(frutas.includes("pera")) // true
console.log(frutas.includes("Pera")) // false
console.log(frutas.includes("sandía")) // false
console.log(frutas.includes("piña", 2)) // true
console.log(frutas.includes("piña", 3)) // false
console.log(frutas[0].includes("man")) // true