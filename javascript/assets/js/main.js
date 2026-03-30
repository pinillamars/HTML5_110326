// alert("Hello world!");
const NOMBREUSER = "Mars";
const EDAD = 20;
const TELEFONO = "+34 576 887 746"
const CUENTAACTIVA= true;
let hobbies = ["programar", "jugar a videojuegos", "natación"];
let poblacion = null;
const DNI_NIF = "57486900F";
document.writeln("Hola");
console.log("Hola otra vez"); //sirve para debugear, aparece solo si se inspecciona la consola en la página web
console.log("Hola", NOMBREUSER,"tienes", EDAD, "años");
console.log(EDAD, typeof EDAD);
console.log(hobbies, typeof hobbies);

let numero1 = 30;
let numero2 = 22;
let suma;
suma = numero1 +  numero2;
if (numero1%2 === 0){
    console.log("Par");
}
else{
    console.log("Es impar")
}
raizCuadrada = Math.sqrt(numero1);
if (EDAD >= 18){
    console.log("Eres mayor de edad y puedes ir a la carcel");
}
else{
    console.log("No eres mayor de edad y te quedas en casa");
}
let nuevoNombre = prompt("Introduce tu nombre");
let nuevaEdad = parseInt(prompt("Introduce tu edad"));

console.log("Tu nombre es", nuevoNombre, "y tu edad es", nuevaEdad);


