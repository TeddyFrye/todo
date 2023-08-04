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
// Helpful speech bubble
function showSpeechBubble() {
  // Create the speech bubble element
  let bubble = document.createElement("div");
  bubble.className = "speech-bubble";
  bubble.innerText = "Triple click any title or information to edit!";

  // Append the bubble to the body of the document
  document.body.appendChild(bubble);

  // Show the bubble after a small delay
  setTimeout(function () {
    bubble.classList.add("show");
  }, 100);

  // Hide the bubble after 10 seconds
  setTimeout(function () {
    bubble.classList.remove("show");

    // Remove the bubble from the document after it has been hidden
    setTimeout(function () {
      document.body.removeChild(bubble);
    }, 1000);
  }, 10000);
}

function addNewProject(title) {
  let newProject = createProject(title);
  projects.push(newProject);
  renderProject(newProject);
  // if this is the second project, show the speech bubble
  if (projects.length === 2) {
    showSpeechBubble();
  }
  document.querySelector('input[name="project-title"]').value = "";
  activeProject = newProject; // Set the active project to the newly created project
  return newProject;
}
