var fs = require('fs');
var path = require("path");
// var list;

fs.readdir(process.argv[2], function doneFiltering(err, files) {
  files.forEach(function (file){
    if (path.extname(file) ==='.' + process.argv[3]) {
      console.log(file);
    }
  });
});


// function countLines() {
//   console.log(list)
// }

// filterContents(countLines)