const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require('./Members')

const app = express();

//Init middleware
app.use(logger);

// abre apenas uma página específica determinada (index.html)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))})

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Homepage router
app.get("/", (req, res) => {
	res.render("index", {
		title: "Member App",
		members
	});
});


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members api route
app.use("/api/members", require("./routes/api/members"));

const PORT = process.envPORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));
