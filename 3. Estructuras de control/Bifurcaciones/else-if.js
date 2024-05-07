//if

const condicion = true;

if (condicion) {
  console.log("En caso de que condicion = true")
} else {
  console.log("En caso de que condicion = false")
}


//Igualdad

let a = 5;
let b = 5;

if (a == b) {
  console.log("Igualdad debil") // Compara valor
}

if (a === b) {
  console.log("Igualdad fuerte") //Compara valor y tipo de dato
}

//Desigualdad
let c = 4;
let d = 10;

if (c != d) {
  console.log("Desigualdad debil") // Diferencia valor
}

if (c !== d) {
  console.log("Desigualdad fuerte") //Diferencia valor y tipo de dato
}

//Mayor que/menor que

let max = 10;
let min = 5;

if(max > min ) {
  console.log("Max es mayor que min") 
}

if(max >= min) {
  console.log("Max es obligatoriamente mayor que min")
}