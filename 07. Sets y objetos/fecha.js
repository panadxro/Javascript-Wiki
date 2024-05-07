// Fechas
const fecha = new Date()
console.log(fecha);

// Fecha custom => Date(año, mes, dia, hora, minuto, segundo, milisegundo)
// Mes inica en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52);
console.log(fecha2);

// Fecha Date(milisegundos)
const fecha3 = new Date(0);
console.log(fecha3);

// Fecha Date(string)
const fecha4 = new Date("November 20, 1987 01:23:52");
console.log(fecha4);

// Compara fechas
console.log(fecha < fecha2);
// Comparar mismas fechas con formato fecha
console.log(fecha2 === fecha4); // ERROR


// Pasar a milisegundos
console.log(fecha2.getTime());
// Comparar mismas fechas con formato milisegundos
console.log(fecha2.getTime() === fecha4.getTime());

// Obtener día, mes, y año
// Día .getDate()
console.log(fecha2.getDate());
// Mes .getMonth() - (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1);
// Año .getFullYear()
console.log(fecha2.getFullYear());

// .toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB"));