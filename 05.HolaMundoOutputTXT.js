var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');
var filePath = path.join(dir, 'output.txt');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log("Archivo creado.");
}

function escribirArchivo() {
    fs.writeFile(filePath, "Hola Mundo", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Escrito en el archivo output.txt");
    });
}

escribirArchivo(); // Imprime el contenido del archivo data.txt