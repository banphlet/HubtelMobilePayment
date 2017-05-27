var fs = require('fs');
var uglify = require("uglify-js");

var uglified = uglify.minify(['./lib/receivemobilemoney.js', './lib/sendmobilemoney.js', './index.js']);

fs.writeFile('./dist/hubtelpayment.min.js', uglified.code, function (err){
  if(err) {
    console.log(err);
  } else {
    console.log("Script generated and saved:", 'hubtelpayment.min.js');
  }      
});