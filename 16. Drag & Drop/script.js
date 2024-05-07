const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const basura = document.querySelector(".trash")


parrafos.forEach(parrafo => {
  // Evento dragstart -> Cuando inicia el arrastre
  parrafo.addEventListener("dragstart", event => {
    console.log(`Inicio de arrastre de elemento n${parrafo.innerText}`)
    // Agrega clase en HTML
    parrafo.classList.add("dragging")
    // Set dato de evento (id)
    event.dataTransfer.setData("id", parrafo.id)
  })

  // Evento dragend -> Cuando finaliza el arrastre
  parrafo.addEventListener("dragend", () => {
    console.log("Fin de arrastre de elemento n" + parrafo.innerText)
    // Elimina clase en HTML
    parrafo.classList.remove("dragging")
  })
})


secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault() // incompatibilidad con evento {"drop"}
    //console.log("Drag Over") -> contador al holding 
  })

  // Evento drop -> Soltar
  seccion.addEventListener("drop", event => {
    
    // Get dato de evento (id)
    const id_parrafo = event.dataTransfer.getData("id")
    // Obtener elemento por (id)
    const parrafo = document.getElementById(id_parrafo)
    // Modificar HTML (seccion)
    // seccion.appendChild(parrafo)
  })
})

basura.addEventListener("drop", event => {
  console.log(`Elemento eliminado`)
  // Get dato de evento (id)
  const id_parrafo = event.dataTransfer.getData("id")
  // Obtener elemento por (id)
  const parrafo = document.getElementById(id_parrafo)
  // Modificar HTML (seccion)
  parrafo.remove(basura)
})