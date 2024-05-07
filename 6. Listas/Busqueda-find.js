// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

// Forma antigua => for()
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma eficiente => .forEach()
let suma = 0;
const arrayNums = [3, 5, 2, 1, 6]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Búsqueda de un valor de una lista .find()
array.find(valor => {
    if (valor === 90) {
        return true 
    }
})


const listaObjetos = [
    { nombre: "Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 15},
    { nombre: "Lucía", edad: 3},
    { nombre: "Amaia", edad: 29}
]

/*const objeto = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
})
*/
const objeto = listaObjetos.find(o => o.nombre === "Miguel");
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Miguel");
console.log(edad);