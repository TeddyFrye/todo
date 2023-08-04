let currentProjectTitle = "Default"; // initially set to default project

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false; // You might want to include a property to track whether the todo is completed
  }

  // Getter methods
  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  getCompletionStatus() {
    return this.isCompleted;
  }

  // Setter methods
  setTitle(title) {
    this.title = title.trim() === "" ? "Untitled" : title;
  }

  setDescription(description) {
    this.description =
      description.trim() === "" ? "No description" : description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate.trim() === "" ? "No due date" : dueDate;
  }

  setPriority(priority) {
    this.priority = priority.trim() === "" ? "No priority" : priority;
  }

  setCompletionStatus(isCompleted) {
    this.isCompleted = isCompleted;
  }
}
//Create a new Todo object
let myTodo = new Todo("My Title", "My Description", "2023-07-30", "High");

//Setter/Getter methods
myTodo.setTitle("New Title");
console.log(myTodo.getTitle());
myTodo.setDescription("New Description");

// Functions to create, edit, and delete todos
function createTodo(title, description, dueDate, priority) {
  return new Todo(title, description, dueDate, priority);
}

function editTodo(todo, title, description, dueDate, priority) {
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(dueDate);
  todo.setPriority(priority);
}
function clearTodoInputFields() {
  let todoTitle = document.querySelector('input[name="todo-title"]');
  let todoDescription = document.querySelector(
    'input[name="todo-description"]'
  );
  //KEEP DUE  DATE BETWEEN TODO INPUTS
  //let todoDueDate = document.querySelector('input[name="todo-due-date"]');
  let todoPriority = document.querySelector('select[name="todo-priority"]');

  // clear all input fields
  todoTitle.value = "";
  todoDescription.value = "";
  // todoDueDate.value = "";
  todoPriority.value = "Medium";
}

function addNewTodoToProject(project, title, description, dueDate, priority) {
  let newTodo = createTodo(title, description, dueDate, priority);
  project.addTodo(newTodo);

  // Render only the new todo
  renderTodo(newTodo);

  clearTodoInputFields();
}
