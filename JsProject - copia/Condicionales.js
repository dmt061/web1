


// Vamos a crear un inicio simple de sesion . capturando datos desde html con un prompt



let email = "bamiraga@cesde.net";

let password = "xyz123";


// Usando prompt vamos a capturar datos desde el teclado

let userEmail = prompt("Ingrese su correo registrado");

let userPassword = prompt("Ingrese su contraseña registrada");


// Vamos a crear un inicio de sesion simple
if(email.match(userEmail) && password.match(userPassword)){

    document.write("Binvenido al sistema")
}else{
    alert("Valide sus credenciales")
}