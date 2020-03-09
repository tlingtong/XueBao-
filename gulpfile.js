const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");


// html文件任务
gulp.task("html", done => {
  gulp
    .src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
  done();
});

// sass任务
gulp.task("sass", done => {
  gulp
    .src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compact" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  done();
});

// img任务
gulp.task("img", done => {
  gulp.src("img/**").pipe(gulp.dest("dist/img"));
  done();
});


// js任务
gulp.task("babel", done => {
  gulp
    .src("js/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
  done();
});

// 其他的引用js任务
gulp.task("libs", done => {
  gulp.src("libs/*.js").pipe(gulp.dest("dist/libs"));
  done();
});

// 搭建服务器
gulp.task("server", done => {
  connect.server({
    root: "dist",
    livereload: true
  });
  done();
});

// 监听各个文件
gulp.task("watch", done => {
    /* gulp.watch(
      ["*.html", "sass/*.scss", "js/*.js", "libs/*.js", "imgs/**"],
      gulp.series("html", "sass", "babel", "libs", "imgs")
    ); */
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("babel"));
    gulp.watch("libs/*.js", gulp.series("libs"));
    gulp.watch("img/**", gulp.series("img"));
    done();
  });
  
  gulp.task("default", gulp.parallel("server", "watch"));
