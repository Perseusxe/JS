let todos = [];

// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// Change Status : Func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// Change Name : Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

// Delete one item
function deleteOne(index) {
  let temp = [];

  for (let i = 0; i<todos.length; i++) {
if(i != index) {
    temp.push(todos[i]);
}
  }
  todos = temp;
}

// Delete All
function deleteAll() {
    todos = [];
}

// Running Application
addOne({ name: "Gym", status: "TODO" });
addOne({ name: "Learn JS", status: "TODO" });
addOne({ name: "Read a Book", status: "TODO" });
editStatus(2, "DONE");
editName(0, "Gym");
deleteOne();z
console.log(todos);
