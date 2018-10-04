const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const fs = require('file-system');

var config = require('./config/structureConfig.json');

// Create structure
gulp.task('start', () => {
  config.folders.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log('📁  folder created:', dir);    
    }   
  });

  config.files.forEach(file => {
    if (!fs.existsSync(`${file.path}/${file.name}`)) {
      fs.writeFileSync(`${file.path}/${file.name}`, file.data);
      console.log('📄  file created:', `${file.name} at ${file.path}`);
    }
  });
});

// Development
gulp.task('sass', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

gulp.task('pug', () => {
  return gulp.src(['src/templates/**/*.pug', '!src/templates/includes', '!src/templates/includes/**'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('work', ['pug','sass'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/templates/**/*.pug', ['pug']);
});