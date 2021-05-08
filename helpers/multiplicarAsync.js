const fs = require('fs');  //acceder al fileSystem
const colors = require('colors');
const crearArchivo = async(base=5, listar=false, hasta)=>{
 try {
     

    
        let salida='', consola='';
        
        for (let index = 1; index <= hasta; index++) {
                salida += ` ${base} x ${index} = ${index*base}\n`;
                consola += ` ${base} ${'x'.green} ${index} ${'='.green} ${index*base}\n`;
            }
        
        if(listar){
            console.log("---------------------------------------".green);
            console.log("tabla del: ".blue, colors.blue(base));
            console.log("---------------------------------------".green);
            console.log(consola); 
        }

        //recordar graar
        //writeFileSync necesita estar dentro de un trycatch para manejar los errores
        fs.writeFileSync(`./output_text/tabla-${base}.txt`, salida);
        
            return(`tabla-${base}.txt`);
        
        } catch (error) {
            throw error;
     
 }
}

module.exports ={ //  export= a lo que se quiera exportar en este caso un objeto
    crearArchivo //estamos creando un objeto y crearArchivo: crearArchivo es hacer redundancia
}
