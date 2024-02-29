

// Usted va a realizar una funcionalidad que le permita al dpto de nomina 
// generar el calculo del salario neto a pagar de los empleados, 
//de acuerdo a su salario y
// validando si estos ganan o no mas de 2 smlv y si tienen derecho a 
// el aux de transporte.
// El descuento de salud se calcula: salario * 4% de eps
// El descuento de pensión se calcula: salario * 4% de pension
// El salario neto se calcula : salario - eps - pension y se le 
// suma el aux de trasnporte si gana menos de 2 smlv



let salary = parseInt(prompt("Ingrese el salario del empleado: "));

function calcularEps(salary) {
    let descuentoEps = salary * 0.04;
    return descuentoEps;
}

function calcularPension( salary){
    let descuentoPension = salary * 0.04;
    return descuentoPension;
}


alert("EPS: " + calcularEps(salary));


let pension = calcularPension(salary);
alert("Pensión: " + pension)


// Vamos a crear un callback que recibe como argumento las funciones de calcular 
//eps y calcularPension

function calcularSalarioNeto(salary, calcularEps, calcularPension){

    if(salary < (1300000*2)){
        let salarioNeto = salary - calcularEps(salary) - calcularPension(salary) + 162000;
        return salarioNeto;
    }else{
        let salarioNeto = salary - calcularEps(salary) - calcularPension(salary);
        return salarioNeto;
    }
}


document.write("El salario a pagar es: " + calcularSalarioNeto(salary, calcularEps, calcularPension));
