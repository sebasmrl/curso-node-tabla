const fs = require('fs');  //acceder al fileSystem
const crearArchivo = (base=5)=>{

    return new Promise( (resolve,reject)=>{
        console.log("---------------------------------------");
        console.log(`Tabla del ${base}`)
        console.log("---------------------------------------");
        
        let salida='';
        
        for (let index = 1; index <= 10; index++) {
                salida += ` ${base} x ${index} = ${index*base}\n`;
            }
        console.log(salida);
        
        //recordar graar
        //writeFileSync necesita estar dentro de un trycatch para manejar los errores
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
            resolve(`tabla-${base}.txt`);
    });
}

module.exports ={ //  export= a lo que se quiera exportar en este caso un objeto
    crearArchivo //estamos creando un objeto y crearArchivo: crearArchivo es hacer redundancia
}
