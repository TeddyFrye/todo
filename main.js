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

  // Render each project
  projects.forEach((project) => {
    renderProject(project);
  });

  // Add event listener for the add project button
  let addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", function () {
    let projectTitle = document.querySelector(
      'input[name="project-title"]'
    ).value;
    addNewProject(projectTitle);
  });

  // Add event listener for the add todo button
  let addTodoButton = document.getElementById("add-todo");
  addTodoButton.addEventListener("click", function () {
    let todoTitle = document.querySelector('input[name="todo-title"]').value;
    // Assuming that you're always adding the todo to the first project for simplicity
    let project = getAllProjects()[0];
    addNewTodoToProject(
      project,
      todoTitle,
      "Some description",
      "2023-07-22",
      "High"
    );
  });
};
