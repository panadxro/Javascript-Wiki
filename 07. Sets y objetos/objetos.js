// Datos personales
const obj = {
    nombre: "Lucas",
    apellido: "Panadero",
    edad: 23,
    altura: 173,
    eresDesarrollador: true
}

// Obtener edad
const años = "edad";
console.log(obj[años]);

// Mejores amigos
const obj2 = {
    nombre: "Caro",
    apellido: "Caruso",
    edad: 21,
    altura: 165,
    eresDesarrollador: false
}

const obj3 = {
    nombre: "Matias",
    apellido: "Batalla",
    edad: 22,
    altura: 172,
    eresDesarrollador: false
}

// Los tres amigos
const los3 = [obj, obj2, obj3];
console.log(los3);

// De mayor a menor
los3.sort((a, b) => b.edad - a.edad);
console.log(los3)