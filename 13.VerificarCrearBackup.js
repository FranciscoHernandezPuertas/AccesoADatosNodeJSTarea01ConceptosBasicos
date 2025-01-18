var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'backup');

function crearNuevaCarpeta() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log("Carpeta creada.");
    } else {
        console.log("La carpeta ya existe.");
    }
}

crearNuevaCarpeta();