let animalPreferido = prompt("¿Cuál es tu animal preferido?");
console.log("Tu animal preferido es", animalPreferido)

if(animalPreferido === "perro"){
    console.log("Es un mamífero de compañía")}
    else if(animalPreferido === "gato"){
        console.log("Es un mamífero de compañía que suelta pelo")
    }
    else if(animalPreferido === "pez"){
        console.log("glu glu")}
    else if(animalPreferido === "pájaro"){
        console.log("pio pio")
    }

switch(animalPreferido){
    case "perro":
        console.log("Es un mamífero de compañía")
        break;
    case "gato":
        console.log("Es un mamífero de compañía que suelta pelo")
        break;
    case "pez":
        console.log("glu glu")
        break;
    case "pájaro":
        console.log("pio pio")
        break;
}
let vehiculo = prompt("¿Qué conduces?");

if(vehiculo.toLowerCase === "coche" || vehiculo.toLowerCase === "moto"){
    console.log("vives")}
    else if(vehiculo === "bicicleta"){
        console.log("Ya veremos")
    }
    else{
        console.log("Te han mordido")
    }

const usuario = {
    edad: 22,
    activo: true,
    rol: "editor",
    emailVerificado: true
};

if(usuario.activo && usuario.emailVerificado && (usuario.rol === "admin" || usuario.rol === "editor") ){
    console.log("Acceso permitido")}
else{
    console.log("Acceso denegado")
}

let mensaje = EDAD >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

let number1 = parseInt(prompt("Escribe un número"));
let number2 = parseInt(prompt("Escribe otro número"));

return number1 === number2 ? "Son iguales" : number1 > number2 ? "El primer número es mayor" : "El segundo número es mayor";