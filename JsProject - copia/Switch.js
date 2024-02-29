



let valor = parseInt(prompt(" marque 1. Avanzado, 2. Sobresaliente, 3. Basico, 4. No aprobado"));

switch(valor){

    case 1:
        alert("Su nota es 5, su nivel avanzado");
        break;
    case 2:
        alert("Su nota esta entre 4 y 4,9, su nivel es Sobresaliente ");
        break;
    case 3:
        alert("Su nota esta entre 3,0 y 3,9, su nivel es Básico");
        break;
    case 4: 
        alert("Su nota es menor a 3 , su nivel es no Aprobado");
        break;
    default:
        alert("Ingrese un valor valido");
        break;              
}