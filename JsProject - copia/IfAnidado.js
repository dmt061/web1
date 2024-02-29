
let peso = prompt("Ingrese su peso");

let altura = prompt("Ingrese su altura");

let imc = peso/(altura*altura);


if(imc < 18.5){

    alert("Tiene bajo peso")
}else if(imc >= 18.5 && imc <= 24.9){

    alert("Tiene un nivel de peso Normal")
}else if(imc >= 25.0 && imc <= 29.9){
    alert("Tiene sobrepeso")
}else if(imc >= 30.0){

    alert("Tiene Obesidad");
}else{
    alert("Ingrese valores validos")
}



