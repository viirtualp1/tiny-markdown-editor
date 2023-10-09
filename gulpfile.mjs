import gulp from "gulp";

import size from "gulp-size";
import rename from "gulp-rename";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";

import rollupStream from "@rollup/stream";
import { babel as rollupBabel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { eslint } from "rollup-plugin-eslint";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "gulp-terser";

import gulpBabel from "gulp-babel";
 

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import postcss_import from "postcss-import";
import cssnano from "cssnano";

import jestCLI from "jest-cli";

import {deleteAsync as del} from "del";
import fs from "fs";
import path from "path";

import util from "util";

const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

let cache;

const rollupConfig = (inputFile, sourcemaps = false) => { return {
  input: inputFile,
  output: {
    format: 'umd',
    name: 'TinyMDE',
    sourcemap: sourcemaps
  },
  plugins: [
    eslint({throwOnError: true}), 
    rollupBabel({babelHelpers: 'bundled'}), 
    nodeResolve(), 
    commonjs()
  ]
}};

const clean = () => del(['./dist', './lib']);

const jest = () => jestCLI.run([]); 

const jsMax = () => 
  rollupStream({...rollupConfig('./src/index.js', true), cache})
    .on('bundle', (bundle) => { cache = bundle })
    .pipe(source('tiny-mde.js'))
    .pipe(buffer())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('tiny-mde.min.js'))
    .pipe(terser())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest('./dist'))
    ;


const jsTiny = () => 
  rollupStream(rollupConfig('./src/tiny.js'))
    .pipe(source('tiny-mde.tiny.js'))
    .pipe(buffer())
    .pipe(terser())
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }));

const js = gulp.series(jsMax, jsTiny);

const transpile = () => 
  gulp.src(('./src/**/*.js'))
    .pipe(gulpBabel())
    .pipe(gulp.dest('./lib'));

const html = () => 
  gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist'));

const css = () =>
  gulp.src('./src/css/index.css')
    .pipe(postcss([ postcss_import(), autoprefixer()]))
    .pipe(rename('tiny-mde.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(postcss([cssnano()]))
    .pipe(rename('tiny-mde.min.css'))
    .pipe(gulp.dest('./dist'));

const watch = () => {
  gulp.watch('./src/**/*.svg', svg);
  gulp.watch('./src/**/*.js', jsMax);
  gulp.watch('./src/**/*.css', css);
  gulp.watch('./src/**/*.html', html);
}

const svg = () => {
  const dirEntries = fs.readdirSync(path.join('.', 'src', 'svg'), {withFileTypes: true});
  let promises = [];
  for (let entry of dirEntries) {
    if (entry.isFile() && entry.name.match(/\.svg$/i)) {
      let fn = entry.name;
      promises.push(
        readfile(path.join('.', 'src', 'svg', fn), {encoding: 'utf8'})
        .then((buffer) => {
          // console.log(entry.name + ': ' + buffer.toString().replace(/([`\$\\])/g, '\\$1'));
          return `${fn.replace(/^(.*)\.svg$/i, '$1')}: \`${buffer.toString().replace(/([`\$\\])/g, '\\$1')}\``;
        })
      );
    }
  }
  return Promise.all(promises)
    .then((values) => writefile(path.join('.', 'src', 'svg', 'svg.js'), `const svg = \{\n  ${values.join(',\n  ')}\n\};\n\nexport default svg;`, {encoding: 'utf8'}));
}

const build = gulp.series(clean, svg, js, css, html);

const dev = gulp.series(clean, svg, jsMax, css, html, watch);

const test = gulp.series(build, jest);

const prepublish = gulp.series(build, jest, transpile);

export {
  dev,
  test,
  svg,
  prepublish,
}

export default build;
// exports.default = build;
// exports.dev = dev;
// exports.test = test;
// exports.svg = svg;
// exports.prepublish = prepublish;