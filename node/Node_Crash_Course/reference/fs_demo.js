const fs = require("fs");
const path = require("path");

//create a folder with fs.mkdir
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
// 	if (err) throw err;
// 	console.log("Folder created...");
// });

//create and copy to a file with fs.writeFile
// fs.writeFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"Hello New World!!!",
// 	err => {
// 		if (err) throw err;
// 		console.log("File created and written to...");
//         //file appendFile
// 		fs.appendFile(
// 			path.join(__dirname, "/test", "hello.txt"),
// 			"Hello Again New World!!!",
// 			err => {
// 				if (err) throw err;
// 				console.log("File created and written to again...");
// 			}
// 		);
// 	}
// );



//whiteFile overwrite the text
// fs.writeFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"Hello Again New World!!!",
// 	err => {
// 		if (err) throw err;
// 		console.log("File created and written to...");
// 	}
// );

// Read a file with fs.readFile
// fs.readFile(path.join(__dirname, "/test", 'hello.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// Rename a file with fs.readFile
fs.rename(path.join(__dirname, "/test", 'hello.txt'), path.join(__dirname, "/test", 'helloWorld.txt'), err => {
	if (err) throw err;
	console.log("File renamed");
});