//Big Int, enteros muy grandes
//El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const number1 = 45n
const number2 = BigInt(45)

typeof 45n // 'bigint'

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof 45n);


const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991
console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n
