// Modulo externo de funciones matematicas
// Exportar módulo con CommonJS - require

function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

// Hacer publicas las funciones
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}