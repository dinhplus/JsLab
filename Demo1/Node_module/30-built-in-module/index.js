// var fs = require('fs');

// var text = fs.readFileSync('./test.txt', { encoding: 'utf-8' });
// console.log(text);
path = require('path')

function getExtension(fileName) {
    // your code here!
    return path.extname(fileName);
}
console.log(getExtension('test.txt'));