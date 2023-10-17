//importando la funcion default
//al importar funciones default puedo usar cualquier nombre
import execFuncion from "./08-module.mjs"
execFuncion();

//si quiero exportar funciones especificas debo usar el mismo nombre que en el export
// el orden no importa
import { sum, myName} from "./08-module.mjs"
console.log(myName) //Mari
console.log(sum(2,5)) //7


import { cube, foo, graph } from "./08-module.mjs"
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888