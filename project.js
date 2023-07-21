class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  // Getter methods
  getTitle() {
    return this.title;
  }

  getTodos() {
    return this.todos;
  }

  // Setter methods
  setTitle(title) {
    this.title = title;
  }

  // Method to add a todo to this project
  addTodo(todo) {
    this.todos.push(todo);
  }

  // Method to remove a todo from this project by index
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}

//Create a new Project object
let myProject = new Project("My Project");

function createProject(title) {
  return new Project(title);
}

function editProject(project, title) {
  project.setTitle(title);
}

function deleteProject(project) {
  // ADD CODE HERE TO DELETE THE PROJECT
}

function addNewProject(title) {
  let newProject = createProject(title);
  storeProject(newProject);
  renderProject(newProject);
  return newProject;
}
