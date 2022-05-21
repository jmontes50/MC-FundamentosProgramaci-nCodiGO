let costoTraje = parseFloat(prompt("Cuanto cuesta ese traje?"));

let descuento = 0;

if(costoTraje > 2500) {
    //lo que este dentro de estas primeras llaves será lo que se ejecute si es verdadero
    console.log("Es mayor a 2500!")
    descuento = 0.15;
} else if(costoTraje > 1400) {
    //En caso la primera condicional no sea verdadera, se evaluará la siguiente condicional y si cualquiera de las sgtes. condicionales es verdadera se ejecutará su código respectivo
    console.log("Es mayor a 1400!")
    descuento = 0.11;
} else {
    //si el if es falso, se ejecutará esto
    console.log("No es mayor que 2500")
    descuento = 0.08;
}

let costoFinal = costoTraje - (costoTraje * descuento);

console.log(costoFinal);