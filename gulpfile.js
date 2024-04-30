import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)


export function css(done) {

    src('src/scss/app.scss', { sourcemaps: true }) //ubicamos el archivo y añadimos sourcemaps: true para que cree el archivo app.css.map
        .pipe(sass().on('error', sass.logError)) //aplicamos sass pero da un error, por eso le aplicamo un listner .on que loguea el error en la terminal
        .pipe(dest('build/css', { sourcemaps: true })) // este es el destino del compilado

    done()
}

export function dev() {
    watch('src/scss/**/*.scss', css)
}