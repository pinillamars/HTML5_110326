for (let i = 0 ; i<10 ; i++){
    document.writeln("Hola mundo ", + i);
    document.writeln("<br>");
}
let salida = document.getElementById("salida");
salida.innerHTML = "Hola mundo desde JS";

let n = 0;

while (n<5){
    document.writeln("Hola mundo ", + n);
    document.writeln("<br>");
    n++;
}   