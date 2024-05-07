//for
//for (variableIinicial; condicion; accion)
for (let i = 0; i < 10; i++) {
  console.log(i);
}


//acceder a los elementos de un arreglo

const numeros = [1, 2, 3, 4, 5]

console.log(numeros[0]);  //imprime arreglo numeros[indice 0] = 1

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}


//for (break & continue)

let lista = [1, 2, 3, 4, 5, 6, 7, 8]; 

for (let i = 0; i < lista.length; i++) {

  if (lista[i] === 3) {
    continue;
  }

  console.log(lista[i]); // 1, 2, 4, 5, 6

  if (lista[i] > 5) {
    break;
  }
}
  
//break & continue

//labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log('El numero actual es: ${decenas}${unidades}')
    unidades++
    if (unidades === 10) {
      unidades = 0
      break bucleUnidades //labels
    }
    if (decenas === 2) {
      break bucleDecenas //labels
    }
  }
  decenas++
}
console.log("Ya hemos terminado")