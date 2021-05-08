const fs = require('fs');  //acceder al fileSystem

const base=3; let salida='';
console.clear();

console.log("---------------------------------------");
console.log(`Tabla del ${base}`)
console.log("---------------------------------------");
for (let index = 1; index <= 10; index++) {
    salida += ` ${base} x ${index} = ${index*base}\n`;
}
console.log(salida);

//recordar graar
//para este write file no hay necesidad de un try_catch
fs.writeFile(`tabla-${base}.txt`, salida, (error)=>{
    if(error) throw error;
    console.log(`tabla-${base}.txt ha sido creado`);
})