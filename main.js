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

// This function will be used to render a project
function renderProject(project) {
  let projectContainer = document.getElementById("project-container");

  // Create a new div to contain the project
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("project"); // Add a class to the projectDiv
  projectDiv.textCoontent = project.getTitle(); // Set the content of the projectDiv

  // Add a click event listener to the projectDiv
  projectDiv.addEventListener("click", function () {
    // Fix this line
    let detailsDiv = document.getElementById("project-details");

    // First, clear out any previous details
    detailsDiv.innerHTML = "";

    // Create and append new elements for each piece of detail
    let titleElement = document.createElement("h2");
    titleElement.textContent = project.getTitle();
    detailsDiv.appendChild(titleElement);

    // Iterate over each todo in the project and display its details
    project.getTodos().forEach((todo) => {
      let todoElement = document.createElement("p");
      todoElement.textContent = `${todo.getTitle()} - ${todo.getDueDate()} - ${todo.getPriority()}`;
      detailsDiv.appendChild(todoElement);
    });
  }); // And fix this line

  // Create a title element
  let titleElement = document.createElement("h2");

  // Set the content of the title element
  titleElement.textContent = project.getTitle();

  // Append the title element to the projectDiv
  projectDiv.appendChild(titleElement);

  // Render each todo in the project
  project.getTodos().forEach((todo) => {
    renderTodo(todo);
  });

  // Append the projectDiv to the project container in your HTML
  document.querySelector("#project-container").appendChild(projectDiv);
}
