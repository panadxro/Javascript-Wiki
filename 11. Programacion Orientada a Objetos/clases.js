// Crear clase
class Persona {
    // atributos(variables)
    /* nombre;
    edad;
    isDeveloper; */

    // Metodos(funciones)
    constructor( nombre, edad, isDeveloper ) {
        // Declarar atributos de una clase
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

// New => crear objeto
const crear_persona = new Persona("Lucas", 22, true);
console.log(crear_persona);

crear_persona.saludo();

let numero = 60 // inicializar => variables
let persona3 = new Persona("Maria", 34, false) // instanciar => objetos

// instanceof => similar a typeof para clases
console.log( typeof persona3 );
console.log( persona3 instanceof Persona);