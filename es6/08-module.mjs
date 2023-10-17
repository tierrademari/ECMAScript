//Nos permite crear modulos para luego utilizar sus funciones

let nuevaFuncion = () => {
    console.log('Hello esto es un modulo!');
}

let otraFuncion = () => {
    console.log('Hello esto es un modulo!');
}

export default nuevaFuncion;
export { otraFuncion };
export let myName = 'Mari'
export function sum(a, b) {
    return a+b;
}

function cube(x) {
    return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options: {
        color: "white",
        thickness: "2px",
    },
    draw: function () {
        console.log("From graph draw function");
    },
};
export { cube, foo, graph };