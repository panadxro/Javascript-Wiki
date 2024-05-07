// Funciones
saludar("Lucas");

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

//
let persona = { nombre: "Juan", apellido: "González" }

saludarPersona(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villa";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

// Parámetro por defecto
function imprimeNumero(numero = 8) { // Parámetro por defecto
    console.log(numero)
}
imprimeNumero()

// return - Retornar un valor

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4);

console.log(s);

// 
let variable_externa = "Hola";

function multiplicar(a = 0, b = 0) {
    console.log(variable_externa);
    let variable_interna = "Adiós";
    console.log(variable_interna);
    return a * b;
}

console.log(multiplicar(4, 2))