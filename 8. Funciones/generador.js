 // Generator
 function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando a que se vuelva a llamar
    }
 }

 const gen = generaId();

 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())