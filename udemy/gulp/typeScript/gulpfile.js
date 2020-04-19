const { series } = require("gulp");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const concat = require("gulp-concat");

function transformacaoTS() {
	return tsProject
		.src()
		.pipe(tsProject())
		.on("error", (err) => console.log("erro"))
		.pipe(gulp.dest("build"));
}

function transformacaoJS() {
	return gulp
		.src("./build**/*.js")
		.on("error", (err) => console.log("erro"))
		.pipe(concat("codigo.min.js"))
		.pipe(gulp.dest("build"));
}

exports.default = series(transformacaoTS, transformacaoJS);
