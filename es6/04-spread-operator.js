//arrays destructuring
const numbers = [ 1, 2, 3, 4, 5 ]
const [uno, dos, tres ] = numbers
console.log(uno, dos, tres)

//object destructuring
const person = { nombre: "Andres", edad: 23, plataforma: "Udemy" }
const country = 'CR'
const phones = { phone1: "86166395", phone2: '70608571', nombre: 'Sonia' } //El segundo nombre sobre escribe
let { nombre, plataforma } = person
console.log(nombre, plataforma) // Andres Udemy

//SPREAD OPERATOR = lo que permite es descomponer algo en unidades mas peques
let data = {...person, country, ...phones } //unir varios objetos
console.log(data)
// {
//     nombre: 'Sonia', //El segundo nombre sobre escribe
//     edad: 23,
//     plataforma: 'Udemy',
//     country: 'CR',
//     phone1: '86166395',
//     phone2: '70608571'
//   }

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]
console.log(array);

// En arrays
const otherArray = [ ...array, array]  // [ 'H', 'o', 'l', 'a', [ 'H', 'o', 'l', 'a' ] ]
console.log(otherArray);

//Otro ejemplo
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji) //[ '👩', '‍',   '❤', '️',   '‍',   '💋', '‍',   '👩']

//No es necesario meterlo en un array siempre
console.log(..."👨‍👩‍👦‍👦") //'👨', '‍',   '👩', '‍',   '👦', '‍', '👦'

//Copias de arrays con el operador de propagacion
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
console.log(originalArray === copyArray)  // false

//Para array con varios niveles de profundidad se usa 
const originalArray2 = [1, [2,3] ,4,5]
const copyArray2 = [...originalArray2] //INCORRECTO
const copyArray3 = structuredClone(originalArray2) // CORRECTO
console.log(originalArray2[1] === copyArray2[1]) // true
console.log(originalArray2 === copyArray2)  // false
console.log(originalArray2[1] === copyArray2[1]) // false


//REST PARAMETER
function sum(num, ...values) {
    console.log(values, [num, ...values], values, ...values) // [ 1, 2, 3 ]    [ 1, 1, 2, 3 ]      [ 1, 2, 3 ]      1, 2, 3 
}
sum(1,1,2,3);

//DIFERENCIAS ENTRE EL PARÁMETRO REST Y EL OPERADOR DE PROPAGACIÓN
//Utilicen la misma sintaxis, son diferentes.
//El parámetro rest agrupa
//El operador de propagación descompone
const finalArray = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest: une los elementos que recibe, eso quiere decir que recibio: (1, 2, [3, 4, 5, 'final'])
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...finalArray, 'final') //<- Operador de propagación: descompone el array en varios elementos
//Eso quiere decir que le envie al metodo lo siguiente: hola(1,2,3,4,5, 'final')


//Ejemplo combinado de destructuring y rest parameter
const arrayNumbers = [0,1,2,3,4,5]
const [cero0, uno1, ...otrosnum] = arrayNumbers //rest parameter: agrupa (funciona como si fueran los parametros de una funcion)
console.log(otrosnum) // [ 2, 3, 4, 5 ]
//En cambio en el spread operator
console.log(...arrayNumbers) // 0 1 2 3 4 5 -> spread operator: descompone
