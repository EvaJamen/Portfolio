var gulp = require( 'gulp' );

gulp.task( 'default', function()
{
    console.log( 'coucou' );
} );

// Dependencies
var gulp          = require( 'gulp' ),
    gulp_css_nano = require( 'gulp-cssnano' ),
    gulp_rename   = require( 'gulp-rename' );

// CSS task
gulp.task( 'css', function()
{
    return gulp.src( './assets/styles/style.css' )    // Get main CSS file
        .pipe( gulp_css_nano() )                // Minify it
        .pipe( gulp_rename( 'style.min.css' ) ) // Rename it
        .pipe( gulp.dest( './assets/styles/' ) );     // Put it in folder
} );

// Dependencies
var gulp        = require( 'gulp' ),
    gulp_concat = require( 'gulp-concat' ),
    gulp_uglify = require( 'gulp-uglify' );

// JS task
gulp.task( 'js', function()
{
    return gulp.src( [                          // Get JS files (in order)
            './assets/scripts/fastclick.js',
            './assets/scripts/script.js'
        ] )
        .pipe( gulp_concat( 'script.min.js' ) ) // Concat in one file
        .pipe( gulp_uglify() )                  // Minify them
        .pipe( gulp.dest( './assets/scripts/' ) );      // Put it in folder
} );

// Watch task
gulp.task( 'watch', function()
{
    // Watch for CSS modifications
    gulp.watch( './assets/styles/style.css', [ 'css' ] );

    // Watch for JS modifications (but not for script.min.js)
    gulp.watch( [ './assets/scripts/**', '!./assets/scripts/script.min.js' ], [ 'js' ] );
} );

gulp.task( 'default', [ 'css', 'js', 'watch' ] );