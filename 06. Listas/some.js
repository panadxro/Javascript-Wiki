// .some()
const array = [3, 7, 2, 4, 7 , 9, 42, 7865, 23, -2];
const res = array.some(valor => valor < -0)
console.log(res)

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola amigo";
console.log(str[5]);
// From()
const ar_str = Array.from(str);
console.log(ar_str)