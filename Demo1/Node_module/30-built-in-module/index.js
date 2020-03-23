var fs = require('fs');

var text = fs.readFileSync('./test.txt', { encoding: 'utf-8' });
console.log(text);