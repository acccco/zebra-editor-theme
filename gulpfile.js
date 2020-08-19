const { src, dest, parallel } = require("gulp");
const stylus = require("gulp-stylus");
const postcss = require("gulp-postcss");
const scopify = require("postcss-scopify");
const rename = require("gulp-rename");
const tap = require("gulp-tap");
const fs = require("fs-extra");
const minimist = require("minimist");

const knownOptions = {
  string: "n",
  default: { n: ".article-theme" },
};

const options = minimist(process.argv.slice(2), knownOptions);

async function makeTheme() {
  let json = [];
  return src("./theme/*.styl")
    .pipe(
      tap((file) => {
        let content = file.contents.toString().split("\n");
        let name = "";
        if (content[0].indexOf("//") === 0) {
          name = content[0].split(" ").pop();
        }
        let author = "";
        if (content[1].indexOf("//") === 0) {
          author = content[1].split(" ").pop();
        }
        let fileName = file.basename.split(".");
        json.push([fileName[0], author, name]);
        fs.outputJson("./lib/index.json", json).catch(console.error);
      }),
    )
    .pipe(stylus({ compress: true }))
    .pipe(dest("./lib"))
    .pipe(postcss([scopify(options.n)]))
    .pipe(
      rename({
        suffix: ".scoped",
      }),
    )
    .pipe(dest("./lib"));
}

exports.makeTheme = makeTheme;

exports.default = parallel(makeTheme);
