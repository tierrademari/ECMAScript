//Template literals
let text = 'Texto que dice algo importante'
let otherText = 'Otro texto que dice algo importante'

let completedText = `${text}. ${otherText}`
console.log(completedText) //Texto que dice algo importante. Otro texto que dice algo importante

//Multi-line strings

let before = 'Antes el texto \n se escribia de esta manera.';
let now = `Ahora el texto 
se puede escribir de esta otra manera.`

console.log(before)
console.log(now)