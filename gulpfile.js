const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const fs = require('file-system');
const sync = require('browser-sync').create();

const config = require('./config/structureConfig.json');

// Create structure
gulp.task('start', () => {
  config.folders.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log('📁  folder created:', dir);    
    }   
  });

  config.files.forEach(file => {
    if (!file.special) {
      if (!fs.existsSync(`${file.path}/${file.name}`)) {
        fs.writeFileSync(`${file.path}/${file.name}`, file.data);
        console.log('📄  file created:', `${file.name} at ${file.path}`);
      }
    }
  });
});

// -----------
// DEVELOPMENT
// -----------

// Compile Sass to CSS
gulp.task('sass', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('tmp/css'));
});

// Compile Pug to HTML
gulp.task('pug', () => {
  return gulp.src(['src/templates/**/*.pug', '!src/templates/includes', '!src/templates/includes/**'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('tmp'));
});

// Watchers
gulp.task('work', ['pug','sass','server'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/templates/**/*.pug', ['pug']);
  gulp.watch('src/**/*.{html,css,js,pug,scss}').on('change', sync.reload);
});

// Create server. Live reload on every save
gulp.task('server', function() {
  sync.init({
      server: {
          baseDir: './tmp'
      }
  });
});

// -----------
// BUILDING
// -----------

// SASS > CSS
// 1. Sass compilation
// 2. Prefixing
// 3. Minification

gulp.task('styles', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
});

// Images minification
gulp.task('photos', () => {
  return gulp.src('src/assets/images/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('dist/assets/images'))
});

// Main building task

gulp.task('build', ['styles', 'photos'], () => {
  return 0;
});



// task in progress
gulp.task('palette', () => {
  let palette = config.files[5];
  fs.writeFileSync(`${palette.path}/${palette.name}`, palette.data);
  console.log('🎨 file created!');
});