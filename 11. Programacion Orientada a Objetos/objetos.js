// Como definir objeto
const persona = {
    nombre: "Lucas",
    edad: 22,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}
persona.saludo()
// Para agregar otro objeto con mismas caracteristicas habría que 
// volver a crear un objeto
const persona2 = {
    nombre: "Miguel",
    eda: 15,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

// Crear Template de objeto
// Función factory
const creaPersona = ( nombre, edad, isDeveloper ) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true);
const nueva_persona2 = creaPersona("Maria", 44, false)
console.log(nueva_persona, nueva_persona2);

