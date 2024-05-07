//Nombre
let nombre = "Lucas";

//Apellido
let apellido = "Panadero";

//Estudiante
let estudiante = nombre + " " + apellido;
console.log(estudiante)

//estudianteMayus
console.log(estudiante.toUpperCase())

//estudianteMinus
console.log(estudiante.toLowerCase())

//lengthestudiante
let numEstudiante = estudiante.length 
console.log(numEstudiante)

//PrimeraLetra
let firstLetra = nombre.charAt()
console.log(firstLetra)

//UltimaLetra
let lastLetra = apellido.charAt(7)
console.log(lastLetra)

//Elimina espacios estudiante
console.log(estudiante.trim())

//Incluye?
console.log(estudiante.includes(`${nombre}`))