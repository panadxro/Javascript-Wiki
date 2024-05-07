// retorna true
function rtrue() {
    return true
}

rtrue();

// Funcion asíncrona - setTimeOut
function cincoSetTimeOut() {
    setTimeout(function() {
       console.log("Hola soy una promesa") 
    },5);
}

cincoSetTimeOut();


// Generador de índices pares

function* generaIndex() {
    let i = 0;
    while(true) {
        i=i+2
        yield i
    }
}

const generator = generaIndex()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
