//  getElementById -> obtener elemento HTML por ID
const p = document.getElementById("parrafo")
const f = document.getElementById("formulario")

//  Cada vez que haga submit, ejecuta esta funcion
f.addEventListener("submit", evento => {
  console.log(evento)
  evento.preventDefault() // Elimina evento por defecto
})

//  Custom events
//  ("nombreEvento", callback => {})
p.addEventListener("nuevoEvento", event => {
  console.log(event)
  // Suplantar detalles de nuevo evento
  // Texto
  p.innerHTML = event.detail.texto
  // Color
  p.style.color = event.detail.color
})

//  Funcion crear eventos
function cambiarTexto(nuevoTexto, color) {
  const event = new CustomEvent("nuevoEvento", {
    detail: {
      texto: nuevoTexto,
      color
    }
  })
  p.dispatchEvent(event)
}