// Store a project
function storeProject(project) {
  if (Array.isArray(project)) {
    console.error("Attempted to store an array as a project:", project);
  } else {
    const key = `project-${project.getTitle()}`; // Added project- prefix
    console.log("Storing project:", project);
    localStorage.setItem(key, JSON.stringify(project));
  }
}

// Retrieve a project
function getProject(key) {
  // Changed parameter name to key for clarity
  let project = localStorage.getItem(key);
  if (project) {
    project = JSON.parse(project);
    console.log("Retrieved project:", project);

    // Since localStorage won't keep the methods of the stored objects, you'll need to recreate them as Projects
    let newProject = new Project(project.title);

    // And you'll need to recreate each todo as a Todo
    project.todos.forEach((todo) => {
      let newTodo = new Todo(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority
      );
      newProject.addTodo(newTodo);
    });

    return newProject;
  }

  return null;
}

// Delete a project
function deleteProject(title) {
  const key = `project-${title}`; // Added project- prefix
  localStorage.removeItem(key);
}

// Store all projects
function storeAllProjects(projects) {
  projects.forEach((project) => {
    storeProject(project);
  });
}

// Retrieve all projects
function getAllProjects() {
  let projects = [];

  const keys = Object.keys(localStorage).filter((key) =>
    key.startsWith("project-")
  ); // Filter keys that start with project-

  keys.forEach((key) => {
    let project = getProject(key);
    if (project) {
      projects.push(project);
    }
  });

  return projects;
}

//Delete project from storage
window.deleteProjectFromStorage = function (title) {
  // Use the localStorage.removeItem method to delete the project from storage
  const key = `project-${title}`; // Added project- prefix
  localStorage.removeItem(key);
};
