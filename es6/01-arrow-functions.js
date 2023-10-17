//Las arrow functions no soportan varias palabras reservadas como yield
//Tampoco pueden usarse como constructor de una clase

//LECTURA IMPORTANTE:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//funcion tipica
function square(num) {
    return num * num;
}

//funcion declarativa
var add = function (a, b, c) {
    return a + b + c;
  };

//funcion flecha
const square = (num) => num * num;

//simplificacion de codigo:
//cuando hay un unico argumento se puede omitir los parentesis
//el return tambien se puede hacer implicito
const square = param => param * param;
console.log(square(4));

//Otros ejemplos con una funcion sin parametros:
//CORRECTO: arrow function tipico
const print1 = () => 'Give me a second';
console.log(print1()); //Give me a second

//INCORRECTO:
const print2 = () => { 'Give me a second' }; 
console.log(print2()); //undefined

//CORRECTO: el print1 seria la opcion simplificada
const print3 = () => { return 'Give me a second' }; 
console.log(print3()); //Give me a second

//CORRECTO: se usan () para indicar el return de forma implicita
const print4 = () => ('Give me a second');
console.log(print4()); //Give me a second

//Usos practicos
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));