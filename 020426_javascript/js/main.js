let nombre = "Ana";
let edad = 25;

const usuarios = [{nombre: "Ana", edad: 25},
                    {nombre: "Luis", edad: 30},
                    {nombre: "María", edad: 22}];

let frutas = ["manzana", "banana", "azul"];

let colores = new Array(); //array vacío asignando el tipo de objeto
// let oscar = new Humano("Oscar", 23, "azules", 1.90); //clase nueva con sus caracteristicas(información guardada dentro)

console.log(frutas[1]);
console.log(usuarios[2]);
frutas.push("sandia"); // manzana, banana, azul, sandia
frutas.unshift("mandarina"); //mandarina, manzana, banana, azul, sandia

// frutas.length = 0; //vacía el array
// frutas=[]; //vacía el array

frutas.splice(1, 0, "pera"); //inserta pera en la posición 1 sin eliminar lo que hay

frutas.forEach(function(fruta){
    console.log(fruta);
});

frutas.forEach(fruta => console.log(fruta)); //es lo mismo que la anterior

let numeros = [1,5,66,3,8,12];
const mayores = numeros.filter(numero => numero >=12);
console.log(mayores); // 66, 12