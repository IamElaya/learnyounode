var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var filter = new RegExp('\.' + process.argv[3] + '$');
mymodule(dir, filter, function(err, value){
  value.forEach(function (file){
    console.log(file);
  })
})