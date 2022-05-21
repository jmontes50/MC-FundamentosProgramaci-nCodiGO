//for(let i = val_ini; condicional; actualizacion){}
//i ++ es lo mismo i = i + 1;
// for(let i = 0; i <= 10; i ++){
//     console.log(i)
// }

let horasTrabajo = 0;

let pagoPorHora = 20; //50 soles por hora

//para la estructura repetitiva, necesitamos el día
for(let dia = 1; dia <= 6; dia++){
    //ejecutar una y otra vez;
    console.log("Día :", dia)
    let horasDia = parseFloat(prompt("Cuantas horas trabajaste hoy?"));
    horasTrabajo = horasTrabajo + horasDia;
    console.log("Horas acumuladas hasta este día", horasTrabajo);
    //se aumenta el valor de día en 1, pasamos al siguiente día
}
//lo que este debajo del for solamente se ejecutará después que el for termine
let pagoTotal = horasTrabajo * pagoPorHora;

console.log("La remuneración semanal es :", pagoTotal);