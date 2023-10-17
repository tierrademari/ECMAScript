//var puede ser hoisted, let y const no. Eso quiere decir que var se declara al inicio del archivo

//let y const pueden asignarse solo dentro de un bloque, pero var al declararse arriba no tiene este tipo de usos
const fruits = () => {
    if (true) {
        
        //con var este valor existe arriba porque se inicializa: hoisted
        //(typeof fruit1 === 'undefined')
        console.log(fruit1); //undefined

        try {
            console.log(fruit2);
            console.log(fruit3);
        } catch {
            //Exception Cannot access 'fruit2' before initialization
            //Exception Cannot access 'fruit3' before initialization
        }
        

        var fruit1 = 'Apple';
        let fruit2 = 'Watermelon'; //let solo existe en este bloque
        const fruit3 = 'Banana'; //let solo existe en este bloque
    }
    
    if (typeof fruit1 !== 'undefined')
        console.log("con var este valor si existe abajo del bloque");

    try {
        console.log(fruit2);   //ReferenceError: fruit2 is not defined
        console.log(fruit3);   //ReferenceError: fruit3 is not defined
    } catch {
    }

    if (typeof fruit2 === 'undefined')
        console.log("con let este valor no existe abajo del bloque");

    if (typeof fruit3 === 'undefined')
        console.log("con const este valor no existe abajo del bloque");
}

fruits();

if (typeof fruit1 === 'undefined')
    console.log("con var este valor no existe afuera de la funcion");

if (typeof fruit2 === 'undefined')
    console.log("con let este valor no existe afuera de la funcion");

if (typeof fruit3 === 'undefined')
    console.log("con const este valor no existe afuera de la funcion");