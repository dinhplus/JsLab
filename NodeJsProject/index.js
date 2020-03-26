var readlineSync = require("readline-sync");
var input = readlineSync.question(" Mày nhập cái gì đó vào đây xem nào: ");
console.log(input);
var fs = require("fs");
fs.readFile('text.md', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});