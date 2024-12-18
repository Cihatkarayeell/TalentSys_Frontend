const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(
      $.nunjucksRender({
        path: ['src/html'],
      }),
    )
    .pipe($.plugin.if($.setting.isProd, $.plugin.htmlmin($.setting.htmlmin)))
    .pipe($.versionNumber($.versionConfig))
    .pipe($.gulp.dest($.path.html.dist))
    .pipe($.browserSync.stream())
}

module.exports = html
