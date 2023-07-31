const os=require('os');
//importing build-in 'os' module in a variable os
// now just write var name(here os) followed by dot(.), then vs code's intellisense will display all the methods available in os module
console.log(os.version());
console.log(os.freemem());

/*
we can destruct also as:-
const {version} = require('os');
or
const freememory=os.freemem();

*/
console.log(os.arch());
console.log(os.userInfo());
//etc...