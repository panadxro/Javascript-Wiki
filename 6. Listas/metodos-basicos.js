// Listas (arrays, arreglos, vectores...)
let var1 = true;
let array = [1, "hola", false, { id: 5 }, null, undefined, var1];
console.log(array);

// Acceder a los valroes de array con posición
// array[índice]
console.log(array[1]);

// Métodos para introducir valores a los arrays
// Valores al final => .push()
array.push('final');
console.log(array);

// Valores al inicio => .unshift
array.unshift('inicio');
console.log(array);


// Métodos para eliminar valores a los arrays
// Valores al final => .pop()
array.pop('final');
console.log(array);
// Valores al inicio => .shift()
array.shift('inicio');
console.log(array);


// Método para modificar valores a los arrays
// .splice(x, y, z)
let array2 = [1, 2, 3, 4, 5, 6];

// Elimnar valores .splice(desdeindice, cantvaloreseliminar)
array2.splice(2, 2);
console.log(array2);

// Añadir valores .splice(indice, cantvaloreseliminar, añadido)
array2.splice(2, 0, "valor añadido");
console.log(array2);