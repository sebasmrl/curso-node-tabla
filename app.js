const {crearArchivo} = require('./helpers/multiplicarAsync');
const  argv = require("./config/yargs"); //importo toda la validacion yargs

require('colors');

//const argv = require('yargs').argv; //contante de yargs, de todo el paquete extrae argv

console.clear();
//console.log(process.argv);//nativo
//console.log(argv);
//console.log('base: yard', argv.base);


//feedback de cuando algo sale bien y algo sale mal
crearArchivo(argv.base, argv.l, argv.hasta)
.then(nombreArchivo =>console.log(nombreArchivo.rainbow,'creado exitosamente'))
.catch(error=>console.error(error));