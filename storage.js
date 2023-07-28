// Store a project
function storeProject(project) {
  if (Array.isArray(project)) {
    console.error("Attempted to store an array as a project:", project);
  } else {
    const projects = getAllProjects(); // Retrieve all existing projects
    projects.push(project); // Add the new project to the existing projects array
    console.log("Storing projects:", projects);
    localStorage.setItem("projects", JSON.stringify(projects)); // Store the entire projects array
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
  let projects = localStorage.getItem("projects"); // Get the projects array
  if (projects) {
    projects = JSON.parse(projects);
    console.log("Retrieved projects:", projects);

    // Since localStorage won't keep the methods of the stored objects, you'll need to recreate them as Projects
    const recreatedProjects = projects.map((project) => {
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
    });

    return recreatedProjects;
  }

  return []; // If there are no projects in localStorage, return an empty array
}
//Delete project from storage
window.deleteProjectFromStorage = function (title) {
  // Use the localStorage.removeItem method to delete the project from storage
  const key = `project-${title}`; // Added project- prefix
  localStorage.removeItem(key);
};
