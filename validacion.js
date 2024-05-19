function validar() {  
    //traigo todo los elemnto
    var nombreApellido = document.getElementById("nombreapellido").value;

    var correoElectronico = document.getElementById("correoelectronico").value;
    /*  var telefono = document.getElementById("telefono").value;
      var mensaje = document.getElementById("mensaje").value;
      var horario = document.getElementById("horario").value;*/

    //valido el nombre
    if (nombreApellido.length == 0) { 
        alert("Tiene que escribir su nombre")
        document.MyForm.nombre.focus() 
        return 0; 
    }

    //valido correo electronico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(correoElectronico)) {
        alert("Ingrese un correo electrónico válido");
        return 0;
    }
    // Validar el campo de horario
    /*  if (horario === "") {
          alert("Seleccione un horario de preferencia");
          return 0;
      }*/

    alert("Muchas gracias por enviar el formulario");
    document.MyForm.submit();
}


  
