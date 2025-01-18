var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');


function usarPipe() {
    const readStream = fs.createReadStream(path.join(dir, 'entrada.txt'));
    const writeStream = fs.createWriteStream(path.join(dir, 'salida.txt'));
    readStream.pipe(writeStream).on('finish', () => {
        console.log('Contenido transferido correctamente mediante pipe.');
    });
}

usarPipe();