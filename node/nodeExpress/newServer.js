let express = require("express");
let ourApp = express();
ourApp.use(express.urlencoded({extended: false}));

ourApp.get("/", (req, res) => {
	res.send(`
		<form action="/answer" method="POST">
			<p>What color is the sky?</p>
            <input name="skyColor" autocomplete="off">
            <button>Submit answer</button>
		</form>
    `);
});

ourApp.post("/answer", (req, res) => {
	if (req.body.skyColor.toUpperCase() == "BLUE") {
		res.send(`
		<p>Contrats, that is the correct answer</P>
		<a href="/">Back to homepage</a>
		`);
	} else {
		res.send(`
		<p>Sorry, that is incorrect</P>
		<a href="/">Back to homepage</a>
		`);
	}
});

ourApp.get("/answer", (req, res) => {
	res.send("Are you lost?");
});

ourApp.listen(3000);
console.log("Running in Port:3000");
