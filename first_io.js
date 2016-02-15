var fs = require('fs');
// var file = process.argv[2],
// lineCount = 0,
// strBuffer;

// strBuffer = fs.readFileSync(file, 'utf8');
// strBuffer = strBuffer.replace(/\n+$/,'');
// strBuffer = strBuffer.split('\n');
// lineCount = strBuffer.length-1;

//official solution

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length-1
console.log(lines);