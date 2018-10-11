const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const proxy = require('http-proxy-middleware');

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
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
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

// 启动一个web-server
gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(server({
      host: 'localhost',
      port: 9000,
      livereture:true,
      middleware:[
        proxy("/h5",{
          target: 'https://mtop.damai.cn',
          changeOrigin: true,
        })
      ]
    }))
})

// copy index.html
gulp.task('copyhtml', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dev/'))
})

// copy iconfonts
gulp.task('copyicons', () => {
  return gulp.src('./src/iconfonts/**/*')
    .pipe(gulp.dest('./dev/iconfonts'))
})


// copy libs
gulp.task('copylibs', () => {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dev/libs'))
})



// 文件修改 watch
gulp.task('watch', () => {
  gulp.watch('./src/*.html', ['copyhtml'])
  gulp.watch('./src/styles/**/*', ['packscss'])
  gulp.watch('./src/scripts/**/*', ['packjs'])
  gulp.watch('./src/libs/**/*', ['copylibs'])
  gulp.watch('./src/mock/**/*', ['copymock'])
})

// default task
gulp.task('default', ['packscss', 'packjs','copyhtml','copylibs', 'copyicons', 'server', 'watch'], () => {
  console.log('all works!')
})