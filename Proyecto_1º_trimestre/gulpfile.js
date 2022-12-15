const{ series,parallel,src,dest,watch}=require("gulp");

const git = require( "gulp-git");
const rm = require( 'gulp-rm' );
const sass = require("gulp-dart-scss");
var fs = require('fs');
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh')
var sassdoc = require('sassdoc');

const rename = require("gulp-rename");
var exe= require("child_process").exec;

var config = {
    host: '34.227.92.15',
    port: 80,
    username: 'node',
    privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
  }
   
  var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
  })

  gulp.task('exec', function () {
    return gulpSSH
      .exec(['docker-compose up'], {filePath: 'commands.log'})
      .pipe(gulp.dest('logs'))
  })



//generar sassdoc
gulp.task('sassdoc', function () {
  return gulp.src('node_modules/bootstrap-5.2.3/scss/bootstrap.scss')
    .pipe(sassdoc());
});







