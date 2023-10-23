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



export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}