// Event alert
const btnAlert = document.querySelector("#btn-alert")

btnAlert.addEventListener("click", () => {
  alert("Click en el botón")
})

// JQuery
$(() => {
  $("#btn-alert").click(() => {
    console.log("Hola, estoy utilizando jQuery")
  })
})