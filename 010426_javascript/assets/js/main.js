function saludar (nombre, edad){
    alert("Hola "+nombre+ ", tienes "+edad+ " años");
}
saludar("Marta", 25);

function sumar(a,b){
    resultado = a+b;
    console.log(resultado);
}
sumar(22, 19);

function multiplicar(a,b){
    return a*b;
}
let resultadoMultiplicacion = multiplicar(5,10);
console.log(resultadoMultiplicacion);

function calcularIVA(precio){
    let iva = precio * 0.21;
    let precioConIVA = precio + iva;
    return precioConIVA;
}
let precioProductos = 100;
let precioConIVA = calcularIVA(precioProductos);
console.log(precioConIVA);

function calcularMayor(a,b,c){
    let result = a===b&&a>c?console.log("El numero mayor es ")+a:b===c&&b>a?console.log("El numero mayor es "+b):
    a>b&&a>c?console.log("El numero mayor es "+a):b>a&&b>c?console.log("El numero mayor es "+b):
    console.log("El numero mayor es "+c);
    return result;
}
console.log(calcularMayor(50, 29, 10));