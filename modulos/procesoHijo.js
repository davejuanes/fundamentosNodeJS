const { exec, spawn } = require('child_process')
// const exec = require('child_process').exec

/* exec('ls -alh', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}) */

let proceso = spawn('ls', ['-alh']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso termino');
    console.log(proceso.killed);
})