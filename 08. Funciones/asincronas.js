// Funcines asíncronas

function miAsinc() {
    // Hace una llamada a una base de datos externa 
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    // Si está todo correcto
    if (true) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Ejecutado correctamente"))
    .catch(()=> console.log("ERROR"))
    .finally(() => console.log("Ejecucion constante"))