var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');

function leerArchivoEnBloques() {
    const archivo = path.join(dir, 'largeData.txt');
    const stream = fs.createReadStream(archivo, { highWaterMark: 1024 });

    stream.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    stream.on('error', (err) => {
        console.error('Error:', err);
    });

    stream.on('end', () => {
        console.log('Lectura en bloques finalizada.');
    });
}

leerArchivoEnBloques();