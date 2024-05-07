// Métodos de cadenas de texto (parte 2)
//Verificar si dos palabras son iguales
let input = 'Cancer'
let db = 'cancer'
console.log(input === db)

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase() === db.toLowerCase())


//Concatenar strings
let vivo1 = "El fin de amar, ";
let vivo2 = "sentirse más vivo";

console.log(vivo1.concat(" ", vivo2))
console.log(vivo1 + vivo2)
console.log(`${vivo1} ${vivo2}`)


//Recortar spacios vacios de string
let espaciosos = "  2 al inicio y 5 al final.     "
console.log(espaciosos.length)
//trim()
console.log(espaciosos.trim().length)
console.log(espaciosos.trimStart().length)
console.log(espaciosos.trimEnd().length)

//Obtener el caracter que se encuentra en posicion
let vivo = "El fin de amar sentirse más vivo. El fin del mar sentirse igual vivo."
//charAt
console.log(vivo.charAt(0))
console.log(vivo[1])

//Obtener posicion de palabra
//indexOf
console.log(vivo.indexOf("fin"))
console.log(vivo.charAt(3))
console.log(vivo.lastIndexOf("fin"))
console.log(vivo.charAt(37))