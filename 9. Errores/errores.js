const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false;
    throw new Error("El valor debe ser de tipo numero");
}

// const elDoble = miFuncion("a1a");


// Try y catch
const numero = "8"
try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, ejecuta esta seccion
    console.error("ERROR")
    console.error(`El valor de e es: ${e}`)
} finally {
    console.log("Esto se ejecuta de todas formas")
}


// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error