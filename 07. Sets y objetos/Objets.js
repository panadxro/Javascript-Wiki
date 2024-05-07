// Objetos
const obj = {
    id: 1,
    nombre: "Lucas",
    apellido: "Panadero",
    isDeveloper: true,
    libro_favorito: "Tus Zonas Erroneas",
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

//Igualar dos objetos
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Candela";
console.log(obj2.nombre);
//obj2 y obj tienen una misma direccion, por lo que cambian ambos el mismo valor (Candela)
console.log(obj.nombre);

// Solución
const obj3 = { ...obj };

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Lucas";

console.log(obj.nombre);
console.log(obj3.nombre);


// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "Ted", anyo: 2012}
]
console.log(listaPeliculas);

// .sort() => Muta el valor de la lista original
listaPeliculas.sort((a, b) => a.anyo - b.anyo);

console.log(listaPeliculas);