// Sets (conjuntos) => valores unicos
const array = [1, 2, 3, 4, 1, 3];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add() => agrega valores al set
miSet.add(5);
console.log(miSet);

// .delete() => elimina valores al set
miSet.delete(3);
console.log(miSet);

// .clear() => limpia el set
/*
miSet.clear() 
*/

// .has() => contiene
console.log(miSet.has(2));

// .size => tamaño del set
console.log(miSet.size);

// .forEach
miSet.forEach( valor => {
    console.log(valor)
})

// values()
const it_miSet = miSet.values();
console.log(it_miSet);

// Factor de propagación => pasar de set a array
const ar_miSet = [ ...miSet ];
console.log(ar_miSet);