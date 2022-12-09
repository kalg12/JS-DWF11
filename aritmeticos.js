/* let numberOne = prompt("Ingresa un número");
let numberTwo = prompt("Ingresa un segundo número"); */

/* let additionResult = parseInt(numberOne) + parseInt(numberTwo); */

/* alert(`La suma de ${numberOne} y ${numberTwo} es: ${additionResult}`); */
/* alert(numberOne - numberTwo);
alert(numberOne / numberTwo);
alert(numberOne * numberTwo);
 */

let numeroUno = "2";
let numeroDos = 2;

/* console.log(5 > 2);
console.log(5 < 2); */
console.log(typeof numeroUno);
console.log(typeof numeroDos);
console.log(numeroUno == numeroDos); // TRUE
console.log(numeroUno === numeroDos); // ????? El triple igual va evaluar el tipo de dato y no el tipo de valor
/* console.log(5 === 2); */

if (5 < 2) {
  /* Aquí va a ir nuestro bloque de código en caso de que se cumpla una condición */
  alert("El 5 es mayor");
} else {
  alert("El 5 no es mayor");
}

let edad = prompt("Ingresa tu edad");

if (edad == 18) {
  /* Alerting the user that they are of age. */
  alert("Eres mayor de edad 🥳");
} else if (edad === 17) {
  alert("Tienes 17 años");
} else if (edad == 15 || edad == 16) {
  alert("Tienes entre 15 y 16, estás chavo");
} else if (edad == 30) {
  alert("Estás chavorruco");
}
