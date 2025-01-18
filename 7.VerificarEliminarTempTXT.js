var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'archivos_txt');
var filePath = path.join(dir, 'temp.txt');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
    console.log("Archivo creado.");
}

function verificarEliminarTempTXT() {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("Archivo eliminado.");
    } else {
        console.log("El archivo no existe.");
    }
}

verificarEliminarTempTXT();