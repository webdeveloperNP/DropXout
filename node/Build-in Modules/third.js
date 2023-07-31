//fs module: build-in module in node.js that provides functionality to interact with the files/file system
const { Console } = require('console');
const fs = require('fs')
/*
//Rading data from file
fs.readFile('file1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('data from file : '+data);
});
//this is async read
//now let's see sync read
//sync read doesn't have callback function
console.log(fs.readFileSync('file1.txt','utf-8'));
*/
//Writing in a file
fs.writeFile('file2.txt', 'This data is being written to file', (err) => {
    if (err) {
        console.log(err); return;
    }
    console.log('Data written in file successfully')
})
//if file already exist it will de deleted and new file will be created
//for sync calls
fs.writeFileSync('file3.txt', 'This data is being written to file(sync)')
console.log('Data written in file(sync)')

//data to be written can be stored in a variable too
const data = 'This data is being written to file';
fs.writeFile('file2.txt', data, (err) => {
    if (err) {
        console.log(err); return;
    }
    console.log('Data written in file successfully')
})
//to check information about file
fs.stat('file1.txt',(err,stat)=>{
    if(err){
        console.log(err);
    }
    console.log(stat)
})
//ame can be written for sync as:
const info=fs.statSync('file1.txt');
console.log(info);

//deeting a file
fs.unlink('file1.txt',(err)=>{
if(err)
{console.log(err);return;}
console.log('file deleted');
})

//creating new directory (folder)
fs.mkdir('folder2',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory created');
})
//delete directory
fs.rmdir('folder1',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory deleted');
})