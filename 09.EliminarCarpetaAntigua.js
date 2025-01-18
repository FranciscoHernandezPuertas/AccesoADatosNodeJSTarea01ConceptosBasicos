var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'carpetaAntigua');

function eliminarCarpetaAntigua() {
    if (fs.existsSync(dir)) {
        fs.rmdirSync(dir);
        console.log("Carpeta eliminada.");
    } else {
        console.log("La carpeta no existe.");
    }
}

eliminarCarpetaAntigua();