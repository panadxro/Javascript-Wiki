//Strings (cadenas de caracteres) 
let comilladoble = "Cadena de caracteres con comillas dobles";
let comillasimple = 'Cadena de caracteres con comillas simples';

//Acotacion dentro de strings
//BackSlash
let BackSlash = "El otro día me dijo \"anda a bañarte\"";
console.log(BackSlash)

//Comillas opuestas
let comillaopuesta = 'Literalmente me dijo "no puedo tengo novio"';
console.log(comillaopuesta)


//Backticks
let Backticks = `Cadena de caracteres con backticks`;

//Permite colocar ${variables} dentro de string con backticks
let nombre = "Lucas";
let saludo = `Bienvenido ${nombre} a tu vida soñada`
console.log(saludo)

//Permite saltos de linea y codigo HTML
let plantilla = `
<html>
  <h1>Pagina web de ${nombre}</h1>
</html>
`;