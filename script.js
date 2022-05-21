console.log("Bienvenid@s a la Master Class de Fund. de Programación");

let promedio = 0;

let texto = "Hola :D"
//solamente para mostrarles que js concatena con +
console.log(texto + 20)

//con +prompt lo convertimos a number para poder hacer operaciones
// let nota1 = +prompt("Ingrese nota 1");
let nota1 = parseFloat(prompt("Ingrese nota 1"));

//console.log(nota1);

let nota2 = parseFloat(prompt("Ingrese nota 2"));

let nota3 = parseFloat(prompt("Ingrese nota 3"));

let nota4 = parseFloat(prompt("Ingrese nota 4"));

promedio = nota1 + nota2 + nota3 + nota4;

console.log(promedio);

promedio = promedio / 4;

console.log("valor final", promedio);

