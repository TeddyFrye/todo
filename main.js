let projects = [];
let activeProject = null;
window.onload = function () {
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
    let todoDescription = document.querySelector(
      'input[name="todo-description"]'
    ).value;
    let todoDueDate = document.querySelector(
      'input[name="todo-due-date"]'
    ).value;
    let todoPriority = document.querySelector(
      'select[name="todo-priority"]'
    ).value;

    if (activeProject) {
      addNewTodoToProject(
        activeProject,
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority
      );
    } else {
      alert("Please select a project first.");
    }
  });

  // Add event listener for each project
  document
    .querySelector("#project-container")
    .addEventListener("click", function (e) {
      // Clear the todo container
      let todoContainer = document.getElementById("todo-container");
      todoContainer.innerHTML = "";

      // Render todos of the clicked project
      activeProject.getTodos().forEach((todo) => {
        renderTodo(todo);
      });
    });
};
