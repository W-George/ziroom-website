const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const server = require('gulp-webserver');
const proxy = require('http-proxy-middleware');

// 编译js
gulp.task('packjs', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(webpack({
            mode: 'development',
            entry: {
                app: './src/scripts/app.js',
            },
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [

                ]
            }
        }))
        .pipe(gulp.dest('./dev/scripts'));
})

// 编译scss
gulp.task('packscss', () => {
    return gulp.src('./src/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/styles'));
})

// 拷贝index.html
gulp.task('copyhtml', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dev'));
});

// 开启服务器
gulp.task('server', () => {
    return gulp.src('./dev')
        .pipe(server({
            host: 'localhost',
            port: '8000',
            livereload: true,
            // middleware: [
            //     proxy('', {
            //         target: '',
            //         changeOrigin: true,
            //     })
            // ]
        }));
})

// default task
gulp.task('default', ['packscss', 'packjs', 'copyhtml', 'server'], ()=>{
    console.log('服务启动成功！');
});