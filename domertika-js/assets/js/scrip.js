// variables
function recogeDatos(evento) {  
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2021 - fecha;
  var bienvenida = document.querySelector("#bienvenida");
  var mensajeEdad;
  var mensaje;

  if (edad > 30) {
    mensajeEdad = "abuelo!";
  } else if (edad < 30) {
    mensajeEdad = "Jovenzuelo!";
  } else 
    mensajeEdad = "No me la creo.";

  mensaje = "hola, " + nombre + ", tienes " + edad + " años, " + mensajeEdad;

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
