var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');
var filePath = path.join(dir, 'log.txt');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log("Archivo creado.");
}

function sobreescribirArchivo() {
    fs.writeFile(filePath, "Actualización completada.", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Sobreescribiendo en el archivo output.txt");
    });
}
/* fs.writeFile sobrescribe el contenido anterior, eliminándolo por completo. 
Para agregar contenido sin borrar lo existente, hay que usar fs.appendFile. */
sobreescribirArchivo();