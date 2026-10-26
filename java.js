/*
alert('Esto se llama desde un archivo');
console.log('Nuevamente andamos por aqui');
document.write('Esto se va a descontrolar!!');
document.write('<h2>Esto se va a descontrolar!!</h2>');

*/

// esto es para una sola linea
/*
ESO
Es para 
varias lineas
*/

/* la VARIABLE nombre guarda valores: string o cadena */
var nombre = "Ricardo Elizalde";

/* la VARIABLE edad debe de guardar un number */
var edad = 47; // Entero / integer

var estatura = 1.80; // Decimal / Float

/* la VARIABLE mayoriaDeEdad guarda el valor boolean */
var mayoriaDeEdad;

console.log(nombre);
console.log(edad);
console.log(estatura);
console.log(mayoriaDeEdad);

alert(nombre);
nombre = prompt("Escribe el nombre nuevo:");
alert("Mi nombre es: " + nombre + ". Y mi edad es de: " + edad + " años.");

edad = prompt("Escribe una edad:");
if (edad >= 18) {
    mayoriaDeEdad = true;
    alert("Tú eres mayor de edad");
}

if (nombre == "pedro") {
    alert("Saludos al bro " + nombre);
}

estatura = prompt("Escribe tu estatura");
if (estatura <= 1.50) {
    alert("Eres un niño");
}
