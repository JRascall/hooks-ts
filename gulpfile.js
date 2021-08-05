const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('tests', async () => {
    await shell.task(`npm test`)();
});

gulp.task('compile', async () => {
    await shell.task(`npm run build`)();
});

gulp.task('build', gulp.series(['tests', 'compile']));
gulp.task('default', gulp.series('build'));