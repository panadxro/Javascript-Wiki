// Unir listas => .concat(lista2)
const lista1 = ['hola', 2, false, null];
const lista2 = ['adios', 8, true, undefined];
console.log(lista1.concat(lista2));
 
// Unir listas => Factor de propagación (...lista)
console.log(...lista1);

const lista3 = [...lista1, ...lista2];
console.log(lista3);
// ERROR!!!
const listaerror = [lista1, lista2];
console.log(listaerror);

