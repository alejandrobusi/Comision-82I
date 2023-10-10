class Persona {
  constructor(nombre, apellido, edad) {
    this.name = nombre;
    this.lastName = apellido;
    this.age = edad;
  }
  saludar() {
    alert(`Hola ${this.name}`);
  }
}

const persona1 = new Persona('Nico', 'Paz', 24);

for (const key in persona1) {
  if (persona1.hasOwnProperty(key)) {
    console.log(persona1[key]);
  }
}

class Car extends Persona {
  constructor(marca, color, modelo, name, apellido, edad) {
    super(name, apellido, edad);
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.onOff = false;
  }
  encender() {
    if (this.onOff) return alert('El auto ya esta encendido');
    this.onOff = true;
    alert('encendiendo el auto');
  }
  apagar() {
    if (!this.onOff) return alert('El auto ya esta apagado');
    this.onOff = false;
    alert('apagando el auto');
  }
}

const auto = new Car('peugeot', 'negro', 206, 'Ale', 'Busi', 29);

class animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
  emitirSonido() {
    alert('miau, guau');
  }
}

class cat extends animal {
  constructor(nombre, edad, dueño, tipo) {
    super(tipo);
    this.nombre = nombre;
    this.edad = edad;
    this.dueño = dueño;
  }
  get obtenerNombre() {
    return this.nombre;
  }
  set cambiarNombre(newName) {
    this.nombre = newName;
  }
  comer(x = 'comida') {
    alert(`El gato esta comiendo ${x}`);
  }
}

class dog extends animal {
  constructor(nombre, edad, dueño, tipo) {
    super(tipo);
    this.nombre = nombre;
    this.edad = edad;
    this.dueño = dueño;
  }
}

const gato = new cat('michi', 2, 'Martin', 'gato');

///// BOM Y BOM

const title = document.createElement('h1');
title.innerHTML = 'Hola, soy el elemento h1 creado desde js';
title.style = 'color: red';
document.body.appendChild(title);

const reloadPage = () => {
  // window.location.reload();
  // window.history.back();
  //window.history.go(-1);
};

// document.getElementById('elBoton').setAttribute('disabled', '');

// console.log(window.print());

// if (window.location.protocol === 'http:') {
//   const resp = confirm('Esta pagina no es segura. quieres salir?');
//   if (resp) {
//     //window.location.replace('https://google.com.ar');
//     // window.location.href = 'https://taringa.net';
//   }
// }
