const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("complexo.csv")
	.pipe(csv({ separator: ";" }))
	.on("data", (data) => results.push(data))
	.on("end", () => {
		console.log(results);
		// [
		//   { NAME: 'Daffy Duck', AGE: '24' },
		//   { NAME: 'Bugs Bunny', AGE: '22' }
		// ]
		fs.writeFile("./complexo.txt", JSON.stringify(results), 'UTF-8', function (err) {
			if (err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 

	});
