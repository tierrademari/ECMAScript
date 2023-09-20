const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'


const hi = null;
const validate = hi ?? 5; //Cuando esta nulo lo setea
console.log(validate);



//Diferencia entre el operador OR y el Nullish coalescing
//El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

//Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId ) // 0



console.log( 0 || "es falso" ) //es falso
console.log( 1 || "es falso" ) //1

console.log( 0 ?? "es null" ) //0
console.log( 1 ?? "es null" ) //1
console.log( null ?? "es null" ) //es null