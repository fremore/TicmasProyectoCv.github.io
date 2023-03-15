var form = document.getElementById('formulario');
form.addEventListener('submit' , function(event){
event.preventDefault();
var mensajesError = [];

if(nombre.value === null || nombre.value ===''){
    mensajesError.push('Ingrese su nombre');
}

if(apellido.value === null || apellido.value ===''){
    mensajesError.push(' apellido');
}

if(email.value === null || email.value ===''){
    mensajesError.push(' su email');
}

if(telefono.value === null || telefono.value ===''){
    mensajesError.push(' su telefono');
}

error.innerHTML = mensajesError.join(',');
});