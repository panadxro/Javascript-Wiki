// .sort() => Ordenar arrays
const array = [2, 5, 9, 15, 1, 2, 0, 4]
array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
})
console.log(array);

// Ordenar arrays numéricos
const arrayNumerico = [3, 4, 6, 2, 1, 7]

arrayNumerico.sort((a, b) => a - b);
console.log(arrayNumerico);
