import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)


export function js(done) {

    src('src/js/app.js')
        .pipe(dest('build/js'))


    done()
}


export function css(done) {

    src('src/scss/app.scss', { sourcemaps: true }) //ubicamos el archivo y añadimos sourcemaps: true para que cree el archivo app.css.map
        .pipe(sass().on('error', sass.logError)) //aplicamos sass pero da un error, por eso le aplicamo un listner .on que loguea el error en la terminal
        .pipe(dest('build/css', { sourcemaps: '.' })) // este es el destino del compilado

    done()
}

export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev)