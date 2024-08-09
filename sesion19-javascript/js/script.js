//obtener longitud sin espacios

function obtenerLongitud(elemento) {
  // console.log(elemento.length);
  var sinEspacios = 0;

  for (var i = 0; i < elemento.length; i++) {
    if (elemento[i] !== " ") {
      sinEspacios++;
    }
  }
  return sinEspacios;
}

var resultado = 5;
resultado = resultado + 1;

console.log(resultado)

console.log(obtenerLongitud("Hola Equipo"));
