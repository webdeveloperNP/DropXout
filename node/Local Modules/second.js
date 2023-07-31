const subFn = require('./subtract');//this is better way to import and export miodules
const s = subFn(5, 5);
console.log(s);
const s2 = subFn(4, 2);
console.log(s2);//demonstrate code reusability
console.log('Data from main file');
console.log('Hi');