const {crearArchivo} = require('./helpers/multiplicarAsync');

console.clear();


//Esto no es muy conveniente
const [,,arg3='base=5'] =process.argv //destructuring
const [,base=5]=arg3.split('='); 
console.log(arg3);
console.log(base);

//const base=3; 

//multiplicar Async hace uso de una funcion asincrona y envia aqui a mejarlo con promesas
crearArchivo(base)
.then(nombreArchivo =>console.log(nombreArchivo,'creado exitosamente'))
.catch(error=>console.error(error)); 