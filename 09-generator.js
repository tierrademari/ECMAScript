function* generator1(){
    yield 'uno'
    yield 'dos'
    yield 'tres'
}

const iterador = generator1()

let obj = iterador.next();
console.log(obj);
console.log(obj.value)//1

obj = iterador.next();
console.log(obj);
console.log(obj.value) //2

obj = iterador.next();
console.log(obj);
console.log(obj.value) //3

obj = iterador.next();
console.log(obj);
console.log(obj.value) //undefined


//Second example
function* generator2(array) {
    for(let value of array) {
        yield value;
    }
}

const arrExample = generator2(['Oscar', 'David', 'Ana'])
console.log(arrExample.next().value) //Oscar

//Third example
function* generator3(array) {
    for(let value of array) {
        yield value.age;
    }
}

const objArrayExample = generator3([
    {name: 'Oscar', age: 21}, {name: 'David', age: 22}, {name: 'Ana', age: 29}
])
console.log(objArrayExample.next().value) //Oscar
console.log(objArrayExample.next().value) //David
console.log(objArrayExample.next().value) //Ana

//Tarea
// En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.
// Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.
// Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

let hiddenId = 0;
function* getId() {
    //while(true) { //solo cuando exportamos la funcion
        yield ++hiddenId;
    //}
}

console.log(getId().next().value)
console.log(getId().next().value)
console.log(getId().next().value)
