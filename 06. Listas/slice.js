// Como obtener una lista a partir de otra
// .slice() => No modifica el array original

const array = ["hola", 1, 2, 3,true, null, "adios"];
// .slice (comienzo, final)
console.log(array.slice(1, 4));
// Negativos
console.log(array.slice(1, -3));
