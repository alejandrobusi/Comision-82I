// comparando objetos
/*
const persona1 = { name: 'juan' };
const persona2 = { ...persona1 };

console.log(persona1 == persona2);

persona2.name = 'test';

console.log(persona1);
console.log(persona2);
*/

//////

// const fecha = new Date();
// console.log(fecha.getHours(), fecha.getMinutes(), fecha.getSeconds());
// console.log(fecha.getMilliseconds());

const register = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/;
  const validationPass = /^(?=.*\d).{4,8}$/;

  if (!validationEmail.test(email)) return alert('El email no es valido');
  if (!validationPass.test(password))
    return alert('la contraseña no cumple los requisitos');
  if (1 == 1) {
    throw new Error('ha ocurrido un error');
  }
  alert('bienvenido');

  console.log('test');
};

//Class

//funcion constructora

function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
  this.saludar = () => {
    alert('Holaa');
  };
}

const persona1 = new Persona('Juan', 'topo', 48);

// for (const key in persona1) {
//   if (persona1.hasOwnProperty(key)) {
//     console.log(persona1[key]);
//   }
// }

// clases con es6

class PersonaClass {
  constructor(nombre, apellido, edad) {
    this.name = nombre;
    this.lastName = apellido;
    this.age = edad;
  }

  saludar() {
    alert(`Hola ${this.name}`);
  }
  editarNombre() {
    this.name = 'test';
  }
}

const persona2 = new PersonaClass('Carlos', 'Menem', 101);

// for (const key in persona2) {
//   if (persona2.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(persona2[key]);
//   }
// }

console.log(persona2.name);
