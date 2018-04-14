const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gulpCleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const _ = require('lodash');

gulp.task('sass', function () {
    return gulp
        .src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpCleanCss())
        .pipe(gulp.dest('./'));
});

gulp.task('html', function () {
    return gulp
        .src('./src/**/*.pug')
        .pipe(pug({
            locals: {
                repos: [
                    { name: 'ng-dropzone', desc: 'AngularJS directive for Dropzone, an easy to use drag\'n\'drop file upload library.', stars: '91', forks: '24', downloads: '18k' },
                    { name: 'ng-image-gallery', desc: 'Probably the best angular inline and modal image gallery combined.', stars: '65', forks: '51', downloads: '12k' },
                    { name: 'ngx-image-gallery', desc: 'Probably the best Angular 4+ modal and inline image gallery.', stars: '19', forks: '5', downloads: '4k' },
                    { name: 'npm-time-ago', desc: 'Simple time ago function for node that actually works.', stars: '4', forks: '1', downloads: '13k' },
                    { name: 'npm-sharper', desc: 'Simple time ago function for node that actually works.', stars: '14', forks: '1', downloads: '1k' },
                    { name: 'ng-spin', desc: 'Simple  $http interceptor spinner for angular.js.', stars: '9', forks: '1', downloads: '1k' },
                ],
                posts: [
                    { name: 'IndexedDB! Your second step towards Progressive Web Apps (PWA)', url: 'https://medium.com/@thatisuday/indexeddb-your-second-step-towards-progressive-web-apps-pwa-dcbcd6cc2076' },
                    { name: 'Service Workers! Your first step towards Progressive Web Apps (PWA)', url: 'https://itnext.io/service-workers-your-first-step-towards-progressive-web-apps-pwa-e4e11d1a2e85' },
                    { name: 'Achieving multi-threading (parallel programming) in JavaScript using Web Workers', url: 'https://medium.com/@thatisuday/achieving-parallelism-in-javascript-using-web-workers-8f921f2d26db' },
                    { name: 'Making CLI app with ease using commander.js and Inquirer.js', url: 'https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac' },
                ],
                skills: _.toPairs({
                    'front-end': [
                        'AngularJS', 'Angular 4+', 'HTML5 / Pug.js', 'CSS / SASS', 'JavaScript / ES6 / ES7',
                        'Semantic UI / Clarity', 'Angular Material', 'Progressive Web Apps', 'Web Sockets',
                    ],
                    'back-end': [
                        'Node.js', 'Typescript', 'GoLang', 'PHP', 'MySQL+SQLite / Sequelize', 'MongoDb / Mongoose', 'Redis',
                        'Rest API (Express)'
                    ],
                    'dev-ops': [
                        'Git / Github', 'Gulp', 'Webpack', 'TDD / Mocha-Chai', 'Cont. Integration / Travis CI',
                        'Nginx Server', 'Google Cloud', 'Amazon AWS / Lamba', 
                    ],
                    'media': ['Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'Adobe Audition', 'After Effects'],
                })
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'html']);

gulp.task('watch', ['build'], function () {
    return gulp.watch(['./src/**/*'], ['build']);
});