// Store a project
function storeProject(project) {
  localStorage.setItem(project.getTitle(), JSON.stringify(project));
}

// Retrieve a project
function getProject(title) {
  let project = localStorage.getItem(title);
  if (project) {
    project = JSON.parse(project);

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
  localStorage.removeItem(title);
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

  for (let i = 0; i < localStorage.length; i++) {
    let title = localStorage.key(i);
    let project = getProject(title);
    if (project) {
      projects.push(project);
    }
  }

  return projects;
}

//Delete project from storage
window.deleteProjectFromStorage = function (title) {
  // Use the localStorage.removeItem method to delete the project from storage
  localStorage.removeItem(title);
};
