// Operaciones aritméticas
let a = 4;
let b = 2;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicación (*)
console.log(a * b);
// División (/)
console.log(a / b);
// Potencia
console.log(a ** b);

// Pasar de Number en Strings
let c = 2.4;
console.log(typeof c);
let a_c = c.toString();
console.log(a_c);
console.log(typeof a_c);

//Redondear decimales
let d = 3.3 * 3;

console.log(d);
console.log(typeof d);

//.toFixed(x) - Limitar numero de decimales a x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

// .toPrecision(x) - Limitar numero de cifras significativas a x
let e = 1523.12345678;
console.log(e.toPrecision(5));
console.log(typeof e.toPrecision(5));
