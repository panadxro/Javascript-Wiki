//$("selector").acción()
//$("h2").hide()

// Expresión que ejecuta cuando cargue
//$(document).ready(() => {}
$(() => {
  /* Selectores:
    id = "el-1" => "#el-1"
    class = "el-1" => ".el-1" */


  // click - fadeOut
  $(".hide-btn").click(() => {
    $("h1").fadeOut()
  })
  // click - fadeIn
  $(".show-btn").click(() => {
    $("h1").fadeIn()
  })
  // click - blue
  $("#el-1").click(() => {
    $("h1").css({ color: "blue"})
  })
  // double click - red
  $("#el-2").dblclick(() => {
    $("h1").css({ color: "red"})
  })
  // New element
  $(".new-element").click(() => {
    $("ul").append("<li>New Element</li>")
  })
  // Hover
  $("li").mouseenter((elem) => {
    elem.target.style.color = "green"
  })
  // No Hover
  $("li").mouseleave((elem) => {
    elem.target.style.color = "black"
  })
})

