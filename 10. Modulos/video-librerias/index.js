// Instalar Axios para hacer llamadas a servicios externos
// Pokéapi
import axios from "axios"; 

axios.get('https://pokeapi.co/api/v2/pokemon/lucas')
    .then(function (response) {
        // handle success
        console.log("SUCCESS!!!")
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR!!!")
        console.log(error);
    });