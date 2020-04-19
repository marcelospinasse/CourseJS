const { series, parallel } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
	return gulp
		.src("src/sass/index.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(uglifycss({ uglyComments: true }))
		.pipe(concat("estilo.min.css"))
		.pipe(gulp.dest("build/css"));
}

function copiarCSS(cb) {
	gulp.src([".build/**/*.css"]).pipe(gulp.dest(".build/css"));
	return cb();
}

function copiarHTML(cb) {
	gulp.src(["./src/**.html"]).pipe(gulp.dest("build"));
	return cb();
}

exports.default = series(parallel(copiarHTML), transformacaoCSS, copiarCSS);
