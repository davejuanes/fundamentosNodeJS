function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err)
        }
    })
}

try {
    seRompeAsincrona(function (err) {
        console.log(err.message);
    })
    // otraFuncion()
    // serompe();
} catch (err) {
    console.error('Vaya algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aquí esta al final');