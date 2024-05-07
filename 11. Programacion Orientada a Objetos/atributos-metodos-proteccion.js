class Persona {
  // Private => # (- Solo se puede acceder dentro de la clase)
  #nombre
  #edad

  // Protected => _ (- Sólo se puede acceder dentro de la clase y clases descendientes)
  _isDeveloper = true


  constructor(nom, edad) {
     this.#nombre = nom;
    this.#edad = edad;
  }
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
  }
  obtenNombre() { // Funcion getter => Permite acceder a atributo protegido
    return this.#nombre
  }

  #obtenEdad() {
    return this.#edad
  }

  getEdad() {
    return this.#edad
  }

  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad
    return this.#edad
  }
} 

const persona = new Persona("Gonza", 90);
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad())
console.log(persona._isDeveloper)

///////////

// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

/* Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos 
privados o protegidos */
persona.setEdad(43)
console.log(persona.getEdad())