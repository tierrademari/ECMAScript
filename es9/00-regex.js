const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchers = regex.exec('2022-01-01');
console.table(matchers);
//console.log(matchers);

console.log('Verificar segundo match');
const matchers2 = regex.exec('01-01-2022');
console.table(matchers2);
//console.log(matchers2);