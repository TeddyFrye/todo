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
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
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
  let todoDueDate = document.querySelector('input[name="todo-due-date"]');
  let todoPriority = document.querySelector('input[name="todo-priority"]');

  // clear all input fields
  todoTitle.value = "";
  todoDescription.value = "";
  todoDueDate.value = "";
  todoPriority.value = "";
}

function addNewTodoToProject(project, title, description, dueDate, priority) {
  console.log("Current project title:", currentProjectTitle); // log the current project title
  let newTodo = createTodo(title, description, dueDate, priority);
  let currentProject = getProject(`project-${currentProjectTitle}`); // get current project from storage
  console.log("Current project:", currentProject); // log the current project

  if (currentProject) {
    // check if currentProject is not null
    currentProject.addTodo(newTodo); // add new todo to current project
    storeProject(currentProject); // store the updated project
    renderProject(currentProject); // re-render the updated project
  } else {
    console.error("Could not find project with title:", currentProjectTitle);
  }
  renderProject(currentProject);
  clearTodoInputFields();
}
