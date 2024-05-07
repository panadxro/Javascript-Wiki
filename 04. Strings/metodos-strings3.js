// Métodos de cadenas de texto (parte 3)
let vivo = "El fin de amar sentirse más vivo. El fin del mar sentirse igual vivo."
//Encuentra palabra
console.log(vivo.match(/El fin /g))
//String incluye(palabra)
console.log(vivo.includes("l fin"))

//String empieza con startsWith()
console.log(vivo.startsWith("El fin de amar"));
//String termina con endsWith()
console.log(vivo.endsWith("sentirse igual vivo."))