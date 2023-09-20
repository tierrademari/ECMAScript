const regex = /\b(Apple)+\b/g;
const fruits = 'Apple, Banana, Kiwi, Apple, Mango, Orange'

for(const match of fruits.matchAll(regex))
console.log(match);