// Lista de la compra
let compraList = ["Arroz", "Huevo", "Leche", "Banana", "Avena"];

// Modifica lista, agrega "Aceite de Girasol"
compraList.push("Aceite de Girasol");
console.log(compraList);

// Elimina "Aceite de Girasol"
compraList.pop("Aceite de Girasol");
console.log(compraList);

// Top 3 peliculas
const top3 = [
    { titulo: "The Place Beyond the Pines", director: "Derek Ciangrance", fecha: 2013},
    { titulo: "Blade Runner 2049", director: "Denis Villeneuve", fecha: 2017},
    { titulo:   "Scott Pilgrim vs The World", director: "Edgar Wright", fecha: 2010}
]

// Post 2010
const post2010 = top3.filter(obj => obj.fecha > 2010);
console.log(post2010);

// Map directores
const directores = top3.map(v => {
    return `${v.director}`
})
console.log(directores);

// Map titulos
const titulos = top3.map(v => {
    return `${v.titulo}`
})
console.log(titulos);

// Concat
const concatPelis = directores.concat(titulos);
console.log(concatPelis);

// Factor de propafación
factProp = [...directores, ...titulos];
console.log(...factProp);