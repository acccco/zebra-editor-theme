const { src, dest, parallel } = require("gulp");
const stylus = require("gulp-stylus");
const postcss = require("gulp-postcss");
const scopify = require("postcss-scopify");
const rename = require("gulp-rename");
const tap = require("gulp-tap");
const fs = require("fs-extra");

async function makeTheme() {
  let json = [];
  let stream = await src("./theme/*.styl")
    .pipe(
      tap((file) => {
        let content = file.contents.toString().split("\n");
        let nameInfo = content[0].split(" ");
        let authorInfo = content[1].split(" ");
        let fileName = file.basename.split(".");
        json.push([
          fileName[0],
          authorInfo[authorInfo.length - 1],
          nameInfo[nameInfo.length - 1]
        ]);
        fs.outputJson("./lib/index.json", json).catch(console.error);
      })
    )
    .pipe(stylus({ compress: true }))
    .pipe(dest("./lib/pure"))
    .pipe(postcss([scopify(".zebra-editor-article")]))
    .pipe(
      rename({
        suffix: ".scoped"
      })
    )
    .pipe(dest("./lib/scoped"));

  return stream;
}

exports.makeTheme = makeTheme;

exports.default = parallel(makeTheme);
