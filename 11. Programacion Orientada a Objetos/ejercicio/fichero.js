// Estudiante
class Estudiante {
  // variable
  nombre;
  asignaturas;

  constructor(nombre, asignaturas) {
    this.nombre = nombre
    this.asignaturas = asignaturas
  }

  // método
  obtenDatos() {
    return [ this.nombre, this.asignaturas ]
  }
}

const nuevoEstudiante = new Estudiante("Lucas", ["HTML", "CSS", "Javascript"])
console.log(nuevoEstudiante);

console.log(nuevoEstudiante.obtenDatos())