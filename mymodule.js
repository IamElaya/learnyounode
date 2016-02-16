var fs = require('fs');
var result = [];

module.exports = function directoryFilter(dir, spec, callback) {
  var spec = new RegExp('\.' + process.argv[3] + '$');
  fs.readdir(dir, function (err, list){
    if(err)
      return callback(err, result);
    result = list.filter(function (file) {
      return spec.test(file);
    })
    return callback(null, result);
  })

}