window.onload = function () {
  // Create instances of Project and Todo
  let myProject = new Project("My Project");
  let myTodo = new Todo("My Todo", "Some description", "2023-07-22", "High");

  // Add the Todo to the Project
  myProject.addTodo(myTodo);

  // Store the project
  storeProject(myProject);

  // Load projects from storage
  let projects = getAllProjects();

  //test adding a new project

  let myNewProject = addNewProject("my special little Project Title");

  // Render each project
  projects.forEach((project) => {
    renderProject(project);
  });
};
