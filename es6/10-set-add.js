//Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.
// Cómo manipular los Sets
// add(value)
// delete(value)
// has(value)
// clear(value)
// size: retorna

//El set no permite elementos repetidos
const list = new Set();

list.add('item 1')
list.add('item 2').add('item 3').add('item 3');

console.log(list)

//****Otros usos del operador de propagacion junto a new Set() > eliminar elementos repetidos de una lista
const arrayConElementosRep = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(arrayConElementosRep)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
