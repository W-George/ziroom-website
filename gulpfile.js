const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const proxy = require('http-proxy-middleware');
// 队列执行
const gulpSequence = require("gulp-sequence");

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
                rules: [{
                        test: /\.html$/,
                        use: ['string-loader']
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
            port: 5000,
            livereture: true,
            middleware: [
                proxy("/v7", {
                    target: 'http://m.ziroom.com',
                    changeOrigin: true,
                }),

                proxy("/api", {
                    target: 'http://m.ziroom.com',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }),
                proxy("/maintainance", {
                    target: 'http://s.m.ziroom.com',
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

// copy images
gulp.task('copyimages', () => {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dev/images'))
})



// 文件修改 watch
gulp.task('watch', () => {
    gulp.watch('./src/*.html', ['copyhtml'])
    gulp.watch('./src/styles/**/*', ['packscss'])
    gulp.watch('./src/scripts/**/*', ['packjs'])
    gulp.watch('./src/libs/**/*', ['copylibs'])
    gulp.watch('./src/mock/**/*', ['copymock'])
    gulp.watch('./src/images/**/*', ['copyimages'])
})

// default task

gulp.task('default', function(cb) {
    gulpSequence(['packscss', 'packjs', 'copylibs', 'copyicons', 'copyhtml', 'watch', 'copyimages'], 'server')(cb)

})