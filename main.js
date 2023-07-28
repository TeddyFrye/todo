window.onload = function () {
  let activeProject = null;
  // Fetch projects from storage and render each of them
  getAllProjects().forEach((project) => {
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

    if (activeProject) {
      addNewTodoToProject(
        activeProject,
        todoTitle,
        "Some description",
        "2023-07-22",
        "High"
      );
    } else {
      alert("Please select a project first.");
    }
  });

  // Add event listener for each project
  document
    .querySelector("#project-container")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("project")) {
        let clickedProjectTitle = e.target.textContent;
        let clickedProject = getAllProjects().find(
          (proj) => proj.title === clickedProjectTitle
        );

        // Update the current project title
        window.currentProjectTitle = clickedProject.title;

        // Clear the todo container
        let todoContainer = document.getElementById("todo-container");
        todoContainer.innerHTML = "";

        // Render todos of the clicked project
        clickedProject.todos.forEach((todo) => {
          renderTodo(todo);
        });
      }
    });
};
