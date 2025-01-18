var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');
var filePath = path.join(dir, 'data.txt');

function leerArchivo() {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
}

leerArchivo(); // Imprime el contenido del archivo data.txt