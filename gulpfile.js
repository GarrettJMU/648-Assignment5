const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css() {
  return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
}

// exports.default = function () {
//   watch('src/*.scss', css);
// }

exports.default = css;
