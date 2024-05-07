let marker, map;

function initMap() {
  // Funcion que inicia automaticamente
  const posicion = { // Map Uluru (Australia)
    lat: -23.363,
    lng: 131.044
  }

  // Visualizar mapa (zoom y centrado)
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion
  })

  // Marcador
  const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Inicial"
  })

  //setPosition({ lat, lng }) -> Obtener la geololazación
  geoPosiciona()
  
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 /* 60 seg */}
    const watchPos = geoLoc.watchPosition(centraMapa, onError, )
  } else {
    alert("Tu navegador no admite geolocalización")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos)
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  // Al bloquear ubicacion
  console.log("Se produjo un error")
  console.error(error)
}