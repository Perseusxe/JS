const STATUS = "TODO" || "DONE";
let todos = [];
 
function render() {
  const todoList = document.querySelector("#todos");
  const tasklist = todoList.querySelector("#tasks");
 
  console.log(todoList);
 
  taskList.innerHTML = "";
 
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
 
    const element = document.createElement("div");
    element.classList.add("todo-item");
 
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;
 
    const btnEl = document.createElement("button");
    btnEl.innerText = "Edit";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };
 
    const deletBtnEl = document.createElement("button");
    deletBtnEl.innerText = "Remove";
    deletBtnEl.onclick = function () {
      deleteOne(i);
      render();
    };
 
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deletBtnEl);
    todoList.appendChild(element);
  }
}
function addToDo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "flex";
  // const input = prompt("Enter todo name");
  // todos.push({ name: input, status: "TODO" });
  // render();
}
 
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}
function deleteOne(index) {
  let temp = [];
  for (let i = 0; i < todos.length; i++) {
    if (i != index) {
      temp.push(todos[i]);
    }
  }
  todos = temp;
  render();
}
 
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}
 
function deleteAll() {
  todos = [];
  render();
}
 
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "DONE") {
      count++;
    }
  }
  return count;
}
 
function saveToDo() {
  const inputValue = document.getElementById("task-name").value;
  todos.push = { name: inputValue, status: "todo" };
 
  const modal = document.querySelector("#modal");
  modal.Style.display = "block";

  render();
}