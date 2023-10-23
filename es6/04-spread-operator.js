//arrays destructuring
const numbers = [ 1, 2, 3, 4, 5 ]
const [a, b, c ] = numbers
console.log(a, b, c) //1 2 3

//object destructuring
const person = { nombre: "Andres", edad: 23, plataforma: "Udemy" }
const country = 'CR'
const phones = { phone1: "86166395", phone2: '70608571', nombre: 'Sonia' } //El segundo nombre sobre escribe
const { nombre, plataforma } = person
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

//Para copiar arrays con varios niveles de profundidad se usa 
const tempOriginal = [1, [2,3] ,4,5]
const copyArray2 = [...tempOriginal] //INCORRECTO
const copyArray3 = structuredClone(tempOriginal) // CORRECTO
console.log(tempOriginal === copyArray2)  // false
console.log(tempOriginal === copyArray3)  // false
console.log(tempOriginal[1] === copyArray2[1]) // true
console.log(tempOriginal[1] === copyArray3[1]) // false


//REST PARAMETER
function sum(num, ...values) {
    console.log(values, ...values, [num, ...values]) // [ 4, 5, 6 ]     4 5 6     [ 1, 4, 5, 6 ]
}
sum(1,4,5,6);

//DIFERENCIAS ENTRE EL PARÁMETRO REST Y EL OPERADOR DE PROPAGACIÓN
//Utilicen la misma sintaxis, son diferentes.
//El parámetro rest agrupa
//El operador de propagación descompone
const finalArray = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest: une los elementos que recibe, eso quiere decir que recibio: (1, 2, [3, 4, 5, 'final'])
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

//Descomponemos finalArray (spread operator)
hola(...finalArray, 'final') // es igual a escribir: hola(1,2,3,4,5, 'final')

//Ejemplo combinado de destructuring y rest parameter
const arrayNumbers = [0,1,2,3,4,5]
const [cero0, uno1, ...otrosnum] = arrayNumbers //rest parameter: agrupa (funciona como si fueran los parametros de una funcion)
console.log(otrosnum) // [ 2, 3, 4, 5 ]


//****Otros usos del operador de propagacion junto a new Set() > eliminar elementos repetidos de una lista
const arrayConElementosRep = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(arrayConElementosRep)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]