//flat:::: todo lo mete en un solo array
const array = [1,1,2,3,4, ['camisa',3,5,6, ['pedro',2,4]]];
const levels = 3;
console.log(array.flat(3));

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [ {'value:': v, ' operation result:': v * 2}]));
console.log("tabla del 3");
console.log(array2.flatMap(v => v*3));
