const path = require('path')

//Base file name
console.log(__filename) //full path and name of the file
console.log(path.basename(__filename)); //just the name of the file

//directory name
console.log(__dirname) //or
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base);  // gives just de base key = nome do arquivo

//Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', "hello.htmml"))

