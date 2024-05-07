// Fecha actual
const fechaActual = new Date();

// Fecha nacimiento
const nacimiento = new Date(2000, 06, 15, 23, 56, 23);
console.log(nacimiento);

// Más tarde
let masTarde = fechaActual > nacimiento;
console.log(masTarde);

// Día de nacimiento
const dia = nacimiento.getDate();
console.log(dia);

// Mes de nacimiento
const mes = nacimiento.getMonth();
console.log(mes + 1);

// Año de nacimiento
const año = nacimiento.getFullYear();
console.log(año);