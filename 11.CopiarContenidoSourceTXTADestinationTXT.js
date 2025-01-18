var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');


function copiarContenido() {
    const source = path.join(dir, 'source.txt');
    const destination = path.join(dir, 'destination.txt');
    fs.copyFile(source, destination, (err) => {
        if (err) {
            console.error('Error al copiar contenido:', err);
        } else {
            console.log('Contenido copiado con éxito.');
        }
    });
}

copiarContenido();