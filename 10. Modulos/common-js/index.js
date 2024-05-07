// Formas de importar/exportar módulos
// 1. CommonJS - require *
// 2. Import ES6 - import

// const moduloMatematicas = require("./modules/matematicas.js")

// const factorial = moduloMatematicas.factorial;
// const suma = moduloMatematicas.suma;

const { factorial , suma } = require("./modules/matematicas.js")

const fact = factorial(5) 
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

