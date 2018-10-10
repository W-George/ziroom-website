const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

gulp.task('packjs', () => {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(webpack({
      mode: 'development',
      entry: {
        app: './src/scripts/app.js'
      },
      output: {
        filename: 'app.js'
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            use: [ 'string-loader' ]
          }
        ]
      }
    }))
    .pipe(gulp.dest('./dev/scripts'))

})

// 编译sass
gulp.task('packscss', () => {
  return gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/styles'))
})

// copy iconfonts
gulp.task('copyicons', () => {
  return gulp.src('./src/iconfonts/**/*')
    .pipe(gulp.dest('./dev/iconfonts'))
})

// 启动一个web-server
gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(server({
      host: 'localhost',
      port: 9000,
      livereture:true,
    }))
})

// copy index.html
gulp.task('copyhtml', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dev/'))
})


// 文件修改 watch
gulp.task('watch', () => {
  gulp.watch('./src/*.html', ['copyhtml'])
  gulp.watch('./src/styles/**/*', ['packscss'])
  gulp.watch('./src/scripts/**/*', ['packjs'])
})

// default task
gulp.task('default', ['packscss', 'packjs','copyicons', 'copyhtml', 'server', 'watch'], () => {
  console.log('all works!')
})