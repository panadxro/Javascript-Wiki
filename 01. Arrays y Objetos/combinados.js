const arbol = [
  {
    nombre: "Lucas",
    apellido: "Panadero",
    dni: "42825059"
  },
  {
    nombre: "Marcela",
    apellido: "Ibalo",
    dni: "92135138"  
  },
  {
    nombre: "Candela",
    apellido: "Panadero",
    dni: "82048393"
  },
  {
    nombre: "Samuel",
    apellido: "Panadero",
    dni: "92135138"
  }
] 

for (let i = 0; i < arbol.length; i++) {
  console.log("----------------------");
  console.log("Nombre " + arbol[i].nombre);
  console.log("Apellido "+ arbol[i].apellido);
  console.log("DNI " + arbol[i].dni);
}

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un stringify a objeto/array  