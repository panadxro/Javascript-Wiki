// Funciones flecha - funciones anónimas
// Callback (deben ser inicializadas primero antes de acceder a ellas)
const dobleDelValor = valor => valor * 2
console.log(dobleDelValor(6));

// Funcion no inicializado primero
console.log(doble(6));
function doble(valor) {
    return valor * 2;
}

//
const array = [ 1, 5, 6, 2, 7, 12, 8, 92 ]

// Funcion anónima
const array2 = array.map((valor) => valor * 2);
console.log(array2);
// Funcion NO anónima
const array3 = array.map(dobleDelValor)
console.log(array3)