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

function deleteTodo(todo) {
  // ADD CODE TO DELETE THE TODO
}
