// LocalStorage ( Mantiene la informacion de manera local, al cerrar y cambiar de perstaña los datos se conservan. )
// setItem
localStorage.setItem("nombre", "Lucas");
localStorage.setItem("nombre", "Nahuel");
localStorage.setItem("persona", JSON.stringify({ nombre: "Luquitas", edad: 22 }));


// getItem
//console.log(localStorage.getItem("nombre")); // primitive
//console.log(JSON.parse(localStorage.getItem("persona"))); // object

// removeItem
localStorage.removeItem("nombre")
localStorage.removeItem("persona")


// SessionStorage ( Mantiene la informacion de manera local, pero al cerrar y cambiar de perstaña los datos no se conservan)
sessionStorage.setItem("nombre-sesion", "IC3SAYKS")


// Cookies ( Mantiene la informacion de manera local y en servidor)
document.cookie = "nombreCookie=LucasCookie";
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString();
console.log(document.cookie);