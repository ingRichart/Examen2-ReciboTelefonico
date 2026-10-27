let num1 = 0;
let num2 = 0;

num1 = prompt("Escribe el valor para el numero 1:") * 1;
num2 = prompt("Escribe el valor para el numero 2:") * 1;

let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let division = num1 / num2;

alert("la suma de los dos numeros es:" + suma);
alert("la resta de los dos numeros es:" + resta);
alert("la multiplicación de los dos numeros es:" + multi);
alert("la división de los dos numeros es:" + division);

if (suma >= 100)
{
    alert("¡TE PASAS!");
}
else
{
    alert("Eres un buen alumno");
}

var resultadoResta = resta < 0;
if (resultadoResta) {
    alert ("El numero de la resta: "+ resta + " es negativo");
}
else {
    alert ("El numero de la resta: "+ resta + " es positvo");
}


alert("Fin del archivo de calculadora");