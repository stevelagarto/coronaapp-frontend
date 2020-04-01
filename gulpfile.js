const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

function addDefSrcIgnore(srcArr) {
  return srcArr.concat([
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store',
    '!package.json',
    '!package-lock.json',
    '!public/manifest.json'
  ]);
}

function lint() {
  return gulp
    .src(addDefSrcIgnore(['**/*.js', '**/*.json']), { dot: true })
    .pipe($.eslint({ dotfiles: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}


exports.lint = lint;
