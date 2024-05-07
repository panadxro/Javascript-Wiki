// Métodos de cadenas de texto (parte 1)
//Obtener longitud de string
let str = 'String con 24 caracteres';
console.log(str.length)


//Obetener partes de cadenas de caracteres
//slice(inicio, final)
let slice = str.slice(0, 23)
console.log(slice)

//substring(inicio, final)
let substring = str.substring(1, 24)
console.log(substring)

//substr(desde, cuantas letras)
let substr = str.substr(5,16)
console.log(substr)


//Reemplazar parte de un string
let cadena = 'Hola perro mi nombre es perro malvado';
console.log(cadena.replace('perro', 'señor'))
//replace (solo reemplaza el primer valor, no todos)

//Para reemplazar todos las instancias = /g (global)
console.log(cadena.replace(/perro/g, 'señor'))