function valid(formulario) {
    var form = true;
    var mensaje = "Por favor, completar los campos:";
if(formulario.elements[0]. value == "") {
    mensaje += " - Nombre";
    form = false;
}
if(formulario.elements["apellido"]. value == "") {
    mensaje += " - Apellido";
    form = false;
}
if(formulario.email.value == ""){
mensaje += " - Email";
    form = false;
 }
 if(formulario.telefono.value == ""){
mensaje += " - telefono";
    form = false;
 }

 if(form == false)
 alert(mensaje);
 else
return alert("Muchas gracias por enviar el formulario");
  }