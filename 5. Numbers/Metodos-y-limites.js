// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String ("Hola");
console.log(str);
console.log(str.valueOf());


// NaN (Not a Number) - Infinity
let n = Number("Hola");
console.log(n);
console.log(isNaN(n));

let numerador = 18;
let divisor = 0;
console.log(numerador / divisor);

let divisorNull = null;
console.log(numerador / divisorNull);

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let numero2 = 17.2;

console.log(typeof numero);
console.log(numero + numero2);// Error

console.log(Number(numero) + numero2);
console.log(parseInt(numero));
console.log(parseFloat(numero));

let numero3 = 4;
console.log(parseInt(numero3));
console.log(parseFloat(numero3));


// Números hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);

//Potenciacion
console.log(2 ** 4);
