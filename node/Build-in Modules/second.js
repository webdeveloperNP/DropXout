const path = require('path');
console.log(__filename);
//'__filename' is keywoed outside path module that gives full path of our working file

console.log(path.basename(__filename));//gives just the base name of file on which we are currently working
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

console.log(path.join('/hello1', '/hello2', 'file1.txt'));
//join will join the dir and/or file names to a complete path, it is just combining the folder/file name it is onot checking for their existence.
console.log(path.join('/hello1', '/hello2', '../file1.txt'));
//notice that, .. will prompt to genetrate path to parent directory


