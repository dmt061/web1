



let opc = parseInt(prompt("Seleccione\n 1.Registrase\n 2.Iniciar Sesion \n 3.Salir"))


switch(opc){

    case 1:
        document.write("Registrarse");
        break;
    case 2:
        document.write("Iniciar"); 
        break;
    case 3:
        document.write("Salir");
        break;

    default:
        alert("Ingrese una opción valida");
}