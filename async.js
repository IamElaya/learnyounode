var fs = require('fs');
var lines;

function readContents(callback){
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    lines = fileContents.toString().split('\n').length-1
    callback()
  })
}

function countLines() {
  console.log(lines)
}

readContents(countLines)