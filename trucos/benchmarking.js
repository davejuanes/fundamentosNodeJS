// Benchmark = prueba de rendimiento o comparativa en inglés
console.time('todo');
let suma = 0
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += 1
}
console.timeEnd('bucle')

let suma2 = 0
console.time('bucle2');
for (let j = 0; j < 100000000; j++) {
    suma2 += 1
}
console.timeEnd('bucle2')

console.time('Empieza el proceso asincrono')
asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    })

console.timeEnd('todo')

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve()
        })
    })
}