const array = ["one", "two", "three",  "four", "five", "six"]

console.log(array[array.length - 1])

//con at hay acceso para adelante y para atras del array

console.log(array.at(0)) //one
console.log(array.at(1)) //two
console.log(array.at(2)) //three
console.log(array.at(3)) //four
console.log(array.at(4)) //five
console.log(array.at(5)) //six
console.log(array.at(6)) //undefined

console.log(array.at(-1)) //six
console.log(array.at(-2)) //five
//...
console.log(array.at(-6)) //one
console.log(array.at(-7)) //undefined