/*
// metodos para numeros
//redondear numero a los decimales especificados
const num1 = 3.14159;
const num1Recortado = num1.toFixed(2);
const num2 = 5.1;
console.log(num1Recortado);
console.log(typeof num1Recortado);
//convierte una cadena a numero
console.log(parseInt(num1Recortado));
//convierte una cadena a un numero decimal
console.log(parseFloat(num1Recortado));
//redondear un numero entero al mas cercano
console.log(Math.round(num2));
//redondea hacia abajo al mas cercano
console.log(Math.floor(num2));
//redondea hacia arriba al mas cercano
console.log(Math.ceil(num2));
//generar nmumero random
console.log(Math.random());
console.log(Math.round(Math.random() * 100));
//encontrar el valor mas alto entre varios numeros
let numeros = [18, 55, 97, 84];
console.log(Math.max(...numeros));
//encontrar el valor mas bajo entre varios numeros
console.log(Math.min(...numeros));
//

// const arr = [];
// for (let i = 0; i < 4; i++) {
//   const inputUser = parseInt(prompt('ingresa un numero'));
//   arr.push(inputUser);
// }
// console.log(Math.max(...arr));
// comprobar si un valor es NaN
// const inputUser = parseInt(prompt('ingresa un numero'));
// if (isNaN(inputUser)) {
//   console.log('solo puedes ingresar numeros');
// }
// comprobar si es un numero entero
console.log(Number.isInteger(5));

// Metodos para strings
let name = 'Alejandro Busi';
// obtener el lago de una cadena
console.log(name.length);
console.log(name[9]);
//obtener un caracter mediante el indice
console.log(name.charAt(10));
//obtener cadena basado en indice de principio y fin
console.log(name.slice(0, 1));
//encuentra la primera posicion de una sub cadena
console.log(name.indexOf('Busi'));
//encuentra la ultima posicion de una sub cadena
console.log(name.lastIndexOf('i'));
//Convertir todo a minusculas
console.log('AleJandRo@gMail.Com'.toLowerCase());
// convertir todo a mayus
console.log('AleJandRo@gMail.Com'.toUpperCase());
// eliminar espacios vacios al principio y al final de una cadena
console.log('   ale   '.trim());
//crear un array con una cadena de texto, mediante un separador
let frutas = 'manzana, banana, pera, uva';
console.log(frutas.split(','));
//reemplazar una sub cadena por otra
console.log(name.replace('Busi', 'Music'));
//concatener texto
console.log(name.concat(frutas));
//comprueba si la cadena comienza con cierta subcadena
console.log(name.startsWith('Alejandro'));
//comprueba si la cadena termina con cierta subcadena
console.log(name.endsWith('Busi'));
//comprobar si la cadena tiene cierta subcadena
console.log(frutas.includes('uva'));
//repite la cadena un numero de veces especificado
console.log(frutas.repeat(3));
*/
//////// Estructuras condicionales
// let num1 = 9;

// if (num1 < 10) {
//   alert('el numero es menor a 10');
// } else if (num1 > 10) {
//   alert('el numero es mayor a 10');
// } else {
//   alert('el numero es igual a 10');
// }

// switch (prompt('ingresa una estación').toLowerCase()) {
//   case 'primavera':
//     alert('la primavera es');
//     break;
//   case 'verano':
//     alert('el verano es');
//     break;
//   case 'inviernno':
//     alert('el invierno es');
//     break;
//   default:
//     alert('no se encontro la opcion');
//     break;
// }

// if (10 >= 9 && 10 <= 20) {
//   alert('entra al if');
// }

// let i = 90;

// while (i < 100) {
//   console.log('Hola Mundo');
//   i++;
// }

// do {
//   console.log('Hola Mundo');
//   i++;
// } while (i < 100);

// for (let i = 1; i < 100; i = i + 2) {
//   console.log(i);
// }

let varios = ['banana', 'uva', 'pera'];
console.log(varios);
