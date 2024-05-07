// Pasar información por pantalla
const botonAlerta = document.querySelector("#btn-al")
const botonConf = document.querySelector("#btn-conf")
const botonInfo = document.querySelector("#btn-info")

botonAlerta.addEventListener("click", () => {
  // Alertas
  alert("Alerta! Click detectado.")
})

botonConf.addEventListener("click", () => {
  // Confirmacion (Aceptar/Cancelar)
  confirm("¿Estás de acuerdo?") ? console.log("OK") : console.log("NO")
  //  confirm( CONDICIONAL ) ? accion if true : accion if false
})

botonInfo.addEventListener("click", () => {
  // Más información
  const nombre = prompt("¿Cual es tu nombre?")
  if (nombre) {
    console.log("Tu nombre es " + nombre)
  } else {
    console.log("No pusiste nada")
  }
})


// Table de arrays en consola
const lista = [{
  nombre: "Lucas",
  edad: 22,
}, {
  nombre: "Candela",
  edad: 17,
}, {
  nombre: "Samuel",
  edad: 66,
}, {
  nombre: "Marcela",
  edad: 45,
}]
console.table(lista)