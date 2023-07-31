const sub = (a, b) => {
    return (a - b);
}
const s = sub(15, 5);
console.log('Data from subtract module');
console.log('Difference = ' + s);

module.exports = sub;