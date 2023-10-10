// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementById('test'));
// console.log(document.querySelector('#test'));

// agreganndo elementos desde js

// const titulo = document.createElement('h2');
// titulo.innerHTML = 'Aguante la com82I';
// titulo.classList = 'm-5';
// titulo.id = 'nuevoId';
// titulo.style = 'color: blue';

// document.querySelector('.contenedor').appendChild(titulo);

/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

const taskList = [];
let auxIndex = null;

const addTask = () => {
  let newTask = document.getElementById('task');
  if (newTask.value.length === 0) {
    return alert('No ingresaste nada');
  }
  taskList.push(newTask.value);
  newTask.value = '';
  renderList(taskList);
};

const renderList = (list) => {
  const ul = document.getElementById('taskListElement');
  ul.innerHTML = '';
  if (list.length !== 0) {
    list.map((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="d-flex my-2 justify-content-between align-items-center">
        ${task}
        <div>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">delete</button> <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editModal" onclick='setTaskInput(${i})'>
        Editar
      </button>
        </div>
      </div>`;
      ul.appendChild(li);
    });
  }
};

const setTaskInput = (index) => {
  const inputModal = document.getElementById('editTask');
  inputModal.value = taskList[index];
  auxIndex = index;
};

const saveNewValue = () => {
  const inputModal = document.getElementById('editTask').value;
  taskList[auxIndex] = inputModal;
  renderList(taskList);
};

const deleteTask = (index) => {
  taskList.splice(index, 1);
  renderList(taskList);
};

// eventos modelo avanzado
const test = (e) => {
  console.log(e);
};

const button = document.getElementById('testButton');

button.addEventListener('click', test, false);

setTimeout(() => {
  button.removeEventListener('click', test);
  console.log('el evento murio');
}, 5000);
