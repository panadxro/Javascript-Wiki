let nombre = "Lucas";
let apellido = "Panadero";

let nombreApellido = { nombre, apellido }

// SessionStorage
sessionStorage.setItem("objeto", nombreApellido)

// LocalStorage
localStorage.setItem("objeto", nombreApellido)

// Cookie
document.cookie = `nombre=${nombreApellido}`
