let todos = [];


function render() {

  const containers = ['todo-list', 'in-progress-list', 'done-list', 'blocked-list'];
  containers.forEach(containerId => {
    const taskList = document.getElementById(containerId);
    taskList.innerHTML = ''; 
  });


  todos.forEach((item, index) => {
    const taskElement = createTaskElement(item, index);
    
    // Find the correct container based on the task status
    const taskList = document.getElementById(`${item.status}-list`);
    taskList.appendChild(taskElement); 
  });
}


function createTaskElement(item, index) {
  const element = document.createElement('div');
  element.classList.add('todo-item');


  const titleEl = document.createElement('p');
  titleEl.style.color = 'white';
  titleEl.innerText = item.name;


  const btnEl = document.createElement('img');
  btnEl.src = 'edit.png';

  btnEl.onclick = function() {
    const newName = prompt('Enter new task name', item.name);
    if (newName) {
      editName(index, newName);
    }
  };


  const deleteBtnEl = document.createElement('img');
  deleteBtnEl.src = 'delete.png';

  deleteBtnEl.onclick = function() {
    deleteOne(index);
  };


  element.appendChild(titleEl);
  element.appendChild(btnEl);
  element.appendChild(deleteBtnEl);

  return element;
}


function addToDo() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}


function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}


function saveToDo() {
  const inputValue = document.getElementById('task-name').value;
  const statusValue = document.getElementById('task-status').value;


  if (inputValue.trim() !== '') {
    todos.push({ name: inputValue, status: statusValue });


    document.getElementById('task-name').value = '';
    document.getElementById('task-status').value = 'todo';


    closeModal();
    render();
  }
}

function editName(index, newName) {
  todos[index].name = newName;
  render(); 
}


function deleteOne(index) {
  todos.splice(index, 1); 
  render();
}


function countDone() {
  return todos.filter(task => task.status === 'done').length;
}
document.getElementById('modal').addEventListener('click', (event) => {
  if (event.target === document.getElementById('modal')) {
    closeModal();
  }
});


render();
